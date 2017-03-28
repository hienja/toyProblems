/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	str = str.split(" ");
	var patternIndex = {};
	var strIndex = {};
	if(pattern.length !== str.length) return false;

	for(var i = 0; i < str.length; i++) {
		if(patternIndex[pattern[i]] === undefined) {
			patternIndex[pattern[i]] = i;
		}
		if(strIndex[str[i]] === undefined ) {
			strIndex[str[i]] = i;
		}
		if(patternIndex[pattern[i]] !== strIndex[str[i]]) {
			return false;
		}
	}

	return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'))