/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true

 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) 
{
    if (s.length == 0) return true;
    if (s.length % 2 == 1) return false; //if there is not an even number of chars then there is a missing opening or closing paren/bracket/brace
    if (s[0] == ')' || s[0] == '}' || s[0] == ']') return false;

    //returns the corresponding closing paren/bracket/brace for the given opener
    var closerFor = function(opener)
    {
        switch (opener)
        {
            case '(':
                return ')';
                break;
            case '{':
                return '}';
                break;
            case '[':
                return ']';
                break;
        }
    }
    
    //this is just a for loop that pushes ({[ on and pops )}] off. If there is no corresponding ({[ for a )}] then it isn't a valid string
    let stack = new String(s[0]);
    
    //let top = 0;

    for(let i = 1; i < s.length; i++)
    {
        onDeck = s[i]; //this will be they guy we check as ({[ and ]})
        if (onDeck == '(' || onDeck == '{' || onDeck == '[')
        {
            stack = stack + onDeck; //push, I did my own because I didn't know about Array.from() when I started...what could go wrong?
        }
        else if (onDeck == closerFor(stack[stack.length-1])) 
        {
            stack  = stack.slice(0, -1); //pop
        }
        else
            return false;
    }
    if (stack.length != 0) return false;
    return true;
};

let myArgs = process.argv.slice(2);

console.log(myArgs);
let a = isValid(String(myArgs));

console.log(a);
