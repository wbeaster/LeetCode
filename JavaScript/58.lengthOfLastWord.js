/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means 
the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) 
{
    //let's get rid of any double spaces to normalize the data
    //there is clearly some ineffeciencies here
    //would be more effecient to walk from right to left, 
    //but that leads to other complexities
    const twoSpaces = "  ";
    while (s.includes(twoSpaces))
    {
        s = s.replace(twoSpaces, " ");
    }

    //remove any trailing space, not sure why trim isn't working
    if (s.lastIndexOf(" ") == s.length-1)
        s = s.slice(0, s.length-1);
    
    let lastSpaceIndex = s.lastIndexOf(" ");

    if (lastSpaceIndex == -1) return s.length;
    
    return (s.length-1) - lastSpaceIndex;
    
};

//TEST MORE. YOU ARE TOO TIRED TO SUBMIT THIS RIGHT NOW. REMEMBER, GOAL IS THE HIGHEST NUMBER OF CORRECT SUBMISSIONS
let string1 = "Hello World";
let string2 = "World";
let string3 = "Hello World ";
let string4 = "World  ";
let string5 = "Hello World   ";
let string6 = " World";
let string7 = " Hello World";
let string8 = "   World";
let string9 = "Just a string"
let string10 = "";
let string11 = " ";
let string12 = "   ";
let string13 = "     ";
let string14 = "This is a completely random sentence";
let string15 = "   a   ";
let string16 = "    a ab    ";
let string17 = "   World";
let string18 = "a";
let string19 = " a ";

let string = string19;
let answer = lengthOfLastWord(string);

console.log(`${string}`)
console.log(answer);