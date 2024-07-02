/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:

All given inputs are in lowercase letters a-z.

 */

//I actually feel like this is a poorly written problem. Is one letter a prefix?

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //lets find the shortest word first, the entire word could be a prefix: pre prefix pretend
    let shortestWord = strs[0];
    for (let i = 0; i < strs.length; i++)
    {
        if (strs[i].length < shortestWord.length)
        {
            shortestWord = strs[i];
        }
        console.log(`shortest word: ${shortestWord}`);
    }




    console.log(strs);

    console.log(strs[0]);
    console.log(strs[1]);
    console.log(strs[2]);
};

//commandline example: node 14.longest-common-prefix.js flower flow flight
let myArgs = process.argv.slice(2);

console.log(myArgs);
let a = longestCommonPrefix(myArgs)

console.log(a);
