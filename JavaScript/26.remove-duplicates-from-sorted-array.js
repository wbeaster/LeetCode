/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) 
{
    if (nums.length == 0) return 0;
    if (nums.length == 1) return 1;

    //check if everything is unique and then return length, if there's a built-in function.
    let count = 1;
    let currentIndex = 0
    let nextIndex = currentIndex + 1;
    let endIndex = nums.length-1;
    
    //we know there are at least two elements in the array, so looking one ahead can be done safely
    do
    {
        let currentElement = nums[currentIndex];
        let nextElement = nums[nextIndex];
        
        //if the next one is the same as the current one, then move the next one to the end of the array
        //else, move the pointers forward one and increase the count by one 
        if (nextElement == currentElement)
        {
            let t = nums.splice(nextIndex, 1);
            nums.push(Number(t));
            endIndex--;
        }
        else
        {
            currentIndex++;
            nextIndex++;
            count++;
        }
    }
    while(nextIndex <= endIndex);
        
    return count;    
};

//Test cases:
//empty array
//array of all same numbers
//array of one of each number

let nums = [0,0,1,1,1,2,2,3,3,4,4];

console.log(nums);

let len = removeDuplicates(nums);

console.log(nums);

console.log(len);

