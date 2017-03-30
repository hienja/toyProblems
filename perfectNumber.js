/*
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14

Note: The input number n will not exceed 100,000,000. (1e8)
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
	if(num === 0 || num === 1) return false;
	var accumulation = 1;
	var left = 2;
	var right = num;

	while(left < right) {
		if(num % left === 0) {
			accumulation += left;
			accumulation +=	num / left;
			right = num / left;
		}
		left++;
	}

	return accumulation === num ? true : false;
};

console.log(checkPerfectNumber(6))

for(var j = 0; j < 1000; j++) {
	if(checkPerfectNumber(j)) {
		console.log(j)
	}
}