/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = s.split(' ');
    var length = words.length - 1

    while(length > 0) {
    	if (words[length].length > 0) {
    		return words[length].length;
    	} else {
    		length--;
    	}
    }
    return 0;
};