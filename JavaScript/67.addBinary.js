/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 

Constraints:

    Each string consists only of '0' or '1' characters.
    1 <= a.length, b.length <= 10^4
    Each string is either "0" or doesn't contain any leading zero.

*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) 
{
    //let aBin = parseInt(a, 2);
    //let bBin = parseInt(b, 2);

    let aBin = BigInt('0b' + a);
    let bBin = BigInt('0b' + b);

    let cBin = aBin + bBin;

    return cBin.toString(2);
    
};

let a1 = '11';
let b1 = '1';

let a2 = '0';
let b2 = '0';

let a3 = '1';
let b3 = '0';

let a4 = '0';
let b4 = '1';

let a5 = '1';
let b5 = '1';

let a6 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
let b6 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
//       "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
//        correct answer is

let a = a6;
let b = b6;

console.log(addBinary(a, b));
