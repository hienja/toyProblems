/*
Given an array of integers and an integer k, find out whether there are two distinct
indices i and j in the array such that nums[i] = nums[j] and the absolute difference
between i and j is at most k.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	var numberList = {};
	var i = 0;
	while(i !== nums.length)  {
		if(numberList[nums[i] + k] || numberList[nums[i] - k]) {
			return true;
		}
		numberList[nums[i]] = true;
		i++;
	}
	return false;
};

console.log(containsNearbyDuplicate([1,4,12], 1))