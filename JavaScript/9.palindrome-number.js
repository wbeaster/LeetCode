/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:

Coud you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(xx) {
    let x = BigInt(xx); //forces x to be a BigInt. I did it this way so I didn't have to change a lot of code below
    
    if (BigInt(x) < BigInt(0)) return false;
    if (BigInt(x) <= BigInt(9)) return true;
    if (BigInt(x) % 10n == 0n) return false;

    let originalNum = BigInt(x);
    let newNum = BigInt(0);
    let rightDigit = BigInt(0); //so it persists outside the while loop

    while(BigInt(x) >= 10n)
    {
        //pop
        let rightDigit = BigInt(x) % 10n;
        x /= 10n;
        
        //push
        newNum *= 10n;
        newNum += BigInt(rightDigit);
    }

    newNum *= 10n;
    newNum += BigInt(x);

    return BigInt(newNum) == BigInt(originalNum);
};

let myArgs = process.argv.slice(2);

console.log(myArgs);

console.log(isPalindrome(BigInt(myArgs)));