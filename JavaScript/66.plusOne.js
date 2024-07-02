/*
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:

Input: digits = [0]
Output: [1]

 

Constraints:

    1 <= digits.length <= 100
    0 <= digits[i] <= 9

*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) 
{
    const firstStep = digits.join('');
    let secondStep = BigInt(firstStep);
    secondStep++;
    const thirdStep = secondStep.toString().split("");
    return thirdStep;    
};

const digits0 = [1, 2, 4];
const digits1 = [1, 2, 9];
const digits2 = [1, 9, 9];
const digits3 = [9, 9, 9];
const digits4 = [0];
const digits5 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const digits6 = [1, 9, 9];
const digits7 = [9, 9, 9];


const digits = digits5;

console.log(digits);
console.log(plusOne(digits));