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
	if(nums.length < 2) {
		return false;
	}

	var duplicateList = {};

	for(var i = 0; i < nums.length; i++) {
		if(duplicateList[nums[i]] === undefined) {
			duplicateList[nums[i]] = i;
		} else {
			if(i - duplicateList[nums[i]] <= k) {
				return true;
			}
			duplicateList[nums[i]] = i;
		}
	}

	return false;
};

console.log(containsNearbyDuplicate([-1, -1], 1))