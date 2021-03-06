/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	// var bracketList = {};
	// bracketList["("] = [];
	// bracketList["["] = [];
	// bracketList["{"] = [];

	// var i = 0;
	// while (i < s.length) {
	// 	if(s[i] === ")") {
	// 		if(bracketList["("][bracketList["("].length - 1] + 1 === i) {
	// 			s = s.substring(0, bracketList["("][bracketList["("].length - 1]) + s.substring(i + 1, s.length);
	// 			bracketList["("].pop();
	// 			i--;
	// 		} else {
	// 			return false;
	// 		}
	// 	} else if(s[i] === "]") {
	// 		if(bracketList["["][bracketList["["].length - 1] + 1 === i) {
	// 			s = s.substring(0, bracketList["["][bracketList["["].length - 1]) + s.substring(i + 1, s.length);
	// 			bracketList["["].pop();
	// 			i--;
	// 		} else {
	// 			return false;
	// 		}
	// 	} else if(s[i] === "}") {
	// 		if(bracketList["{"][bracketList["{"].length - 1] + 1 === i) {
	// 			s = s.substring(0, bracketList["{"][bracketList["{"].length - 1]) + s.substring(i + 1, s.length);
	// 			bracketList["{"].pop();
	// 			i--;
	// 		} else {
	// 			return false;
	// 		}
	// 	} else {
	// 		bracketList[s[i]].push(i);
	// 		i++;
	// 	}
	// }

	// return !s ? true : false;

	var openBracketStack = [];
	var braketCounter = 0;

	for(var i = 0; i < s.length; i++) {
		if(s[i] === "(") {
			openBracketStack[braketCounter] = ")";
			braketCounter++;
		} else if(s[i] === "[") {
			openBracketStack[braketCounter] = "]";
			braketCounter++;
		} else if(s[i] === "{") {
			openBracketStack[braketCounter] = "}";
			braketCounter++;
		} else {
			if(openBracketStack[braketCounter - 1] !== s[i]) {
				return false;
			}
			braketCounter--;
		} 
	}
	
	return braketCounter === 0 ? true : false;
};

console.log(isValid("((){[]})"));