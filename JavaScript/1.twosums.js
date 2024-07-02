/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) 
{    
    console.log('Entering twoSum function.');
    let indices = [-1, -1];
    for (let a = 0; a < nums.length; a++)
    {
        for (let b = 0; b < nums.length; b++)
        {
            let sum = parseInt(nums[a]) + parseInt(nums[b]);
            console.log(`${nums[a]} + ${nums[b]} = ${sum}`);
            if ((sum == target) && (a !== b)) 
            {
                console.log(`changing indices to ${a} ${b}`);
                indices = [a, b];
            }
        }
    }
    console.log('Exiting twoSum function.');
    return indices;
};

let myArgs = process.argv.slice(2);
let target = myArgs.pop();
let nums = myArgs;

console.log(`Target: ${target}`);
console.log(`Numbers ${nums.length}: ${nums}`);

let answer = twoSum(nums, target) 
console.log(answer);

