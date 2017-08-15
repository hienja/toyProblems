/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/
var findUnsortedSubarray = function(nums) {
	var previousNumber = nums[0];
	var firstIndex = nums.length;
	var lastIndex;
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] < previousNumber) {
			for (var j = previousNumber; j >= 0; j--) {
				if (nums[i] < nums[j]) {
					if (j < firstIndex) {
						firstIndex = j;
					}
				}
			}
			lastIndex = i;
		} else {
			previousNumber = nums[i];
		}
	}
	return lastIndex !== undefined ? lastIndex - firstIndex + 1 : 0;
};

findUnsortedSubarray = function(nums) {
	var length = nums.length;
	var max = nums[0];
	var min = nums[length - 1];
	var start = -1;
	var end = -2;
	for (var i = 1; i < length; i++) {
		max = Math.max(max, nums[i]);
		min = Math.min(min, nums[length - 1 - i]);
		if (nums[i] < max) end = i;
		if (nums[length - 1 - i] > min) start = length - 1 - i;
	}
	return end - start + 1;
};

console.log(findUnsortedSubarray([1, 3, 5, 4, 2]));
