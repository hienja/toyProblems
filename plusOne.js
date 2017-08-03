/*
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
*/

var plusOne = function(digits, n) {
	n = n === undefined ? digits.length - 1 : n;

	if (digits[n] === 9) {
		if (n === 0) {
			digits[0] = 1;
			digits.push(0);
			return digits;
		}
		digits[n] = 0;
		return plusOne(digits, n - 1);
	}

	digits[n]++;
	return digits;
};
console.log(plusOne([9, 9, 9]));
