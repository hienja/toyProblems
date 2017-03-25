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
		if(!duplicateList[nums[i]]) {
			duplicateList[nums[i]] = [];
			duplicateList[nums[i]].push(i);
		} else {
			duplicateList[nums[i]].push(i);
		}
	}

	for(var list in duplicateList) {
		if(duplicateList[list].length >= 2) {
			for(var j = duplicateList[list].length - 1; j > 0; j--) {
				if(duplicateList[list][j] - duplicateList[list][j - 1] <= k) {
					return true;
				}
			}
		}
	}

	return false;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))