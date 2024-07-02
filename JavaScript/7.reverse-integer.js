/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) 
{
    const MAXINT = 2**31 - 1;
    const MININT = -(2**31);

    if (x <= 9 && x >= -9 ) return x;

    let positive = true;
    if (x < 0)
    {
        positive = false;
        x *= -1;
    }

    let newNum = 0;
    let rightDigit = 0; //so it persists outsdie the while loop

    while(x >= 10)
    {
        //pop
        let rightDigit = x % 10;
        x /= 10;
        
        //push
        newNum *= 10;
        newNum += parseInt(rightDigit);
    }

    newNum *= 10;
    newNum += x;

    if (!positive) {newNum *= -1};
    if (newNum > MAXINT || newNum < MININT) return 0;
    return parseInt(newNum);
    
};

let myArgs = process.argv.slice(2);

console.log(myArgs);

console.log(reverse(parseInt(myArgs)));