/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Constraints:

    haystack and needle consist only of lowercase English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) 
{
    if (needle.length > haystack.length) return -1;
    if (needle == "") return 0;
    if (needle == haystack) return 0;
    
    let answer = -1;
    
    let windowSize = needle.length;
    let i = -1;

    do
    {
        i++;
        console.log(i);
        if (needle == haystack.substr(i, windowSize)) 
            answer = i;
    }
    while ((i + windowSize < (haystack.length)) && answer == -1)

    return answer;
};

let haystack = 'looo';
let needle = 'll';

console.log(`Looking for ${needle} in ${haystack}`);

let firstOcc = strStr(haystack, needle);

console.log(firstOcc);

