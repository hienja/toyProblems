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
	str = str.split(' ');
	var patternString = "";
	var strString = "";
	var patternList = {};
	var strList  = {};
	var patternNumber = 1;
	var strNumber = 1;

	for(var i = 0; i < pattern.length; i++) {
		if(!patternList[pattern[i]]) {
			patternList[pattern[i]] = patternNumber;
			patternString += patternList[pattern[i]];
			patternNumber++;
		} else {
			patternString += patternList[pattern[i]];
		}
	}

	for(var j = 0; j < str.length; j++) {;
		if(!strList[str[j]]) {
			strList[str[j]] = strNumber;
			strString += strList[str[j]];
			strNumber++;
		} else {
			strString +=strList[str[j]];
		}
	}

	return patternString === strString ? true : false;
};

console.log(wordPattern('abba', 'dog cat cat dog'))