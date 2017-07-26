// var isPalindrome = function(x) {
// 	var string = x.toString();
// 	for(var i = string.length - 1, j = 0; i >= j; i--, j++ ) {
// 		if(string[i] !== string[j]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
var isPalindrome = function(x) {
	if(x < 0 || (x !== 0 && x % 10 === 0)) return false;
	var sum = 0;
	while (x > sum) {
		sum = sum * 10 + x % 10;
		x = Math.floor(x / 10);
	}
	return (x === sum) || (x === Math.floor(sum / 10));
};

console.log(isPalindrome(11111));