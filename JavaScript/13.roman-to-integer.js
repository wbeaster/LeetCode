/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999 (I to MMMCMXCIX).

Example 1:

Input: "III"
Output: 3

Example 2:

Input: "IV"
Output: 4

Example 3:

Input: "IX"
Output: 9

Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */

var romToInt = function(rom, int)
{
    //take care of the romans with a length of one first
    //this also is the recursive function's terminating case
    if (rom.length == 1)
    {
        switch(rom[0])
        {
            case 'I':
                return int + 1;
            case 'V':
                return int +  5;
            case 'X':
                return int +  10;
            case 'L':
                return int +  50;
            case 'C':
                return int +  100;
            case 'D':
                return int +  500;
            case 'M':
                return int +  1000;
        }
    }

    //now we deal with romans with a length greater than one
    //having a length greater than one means that we can safely look one spot to the right of the char we are switch-ing
    switch(rom[0])
    {
        case 'M':
            return romToInt(rom.slice(1), int+1000);
            break;
        case 'D':
            return romToInt(rom.slice(1), int+500);
            break;
        case 'C':
            switch(rom[1])
            {
                case 'D':
                    return romToInt(rom.slice(1), int-100);
                    break;
                case 'M':
                    return romToInt(rom.slice(1), int-100);
                    break;
                default:
                    return romToInt(rom.slice(1), int+100);
            }
        case 'L':
            return romToInt(rom.slice(1), int+50);
            break;
        case 'X':
            switch(rom[1])
            {
                case 'L':
                    return romToInt(rom.slice(1), int-10);
                    break;
                case 'C':
                    return romToInt(rom.slice(1), int-10);
                    break;
                default:
                    return romToInt(rom.slice(1), int+10);
            }
        case 'V':
            return romToInt(rom.slice(1), int+5);
            break;
        case 'I':
            switch(rom[1])
            {
                case 'V':
                    return romToInt(rom.slice(1), int-1);
                    break;
                case 'X':
                    return romToInt(rom.slice(1), int-1);
                    break;
                default:
                    return romToInt(rom.slice(1), int+1);
            }
    }

}


 var romanToInt = function(s) 
{
    answer = romToInt(s, 0);

    return answer;
    
};

let myArgs = process.argv.slice(2);

console.log(myArgs);

console.log(romanToInt(String(myArgs)));
