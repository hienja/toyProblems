/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var i = 0;
  var j = 0;

  for(var k = 0; k < n; k++) {
  	nums1[m + k] = nums2[k]
  }

  while(i <= m && j <= n) {
  	if(nums1[m + j] < nums1[i]) {
  		var temp = nums1[i];
  		nums1[i] = nums1[m + j];
  		nums1[m + j] = temp;

  		var currentNums2 = m + j;
  		while(nums1[currentNums2] > nums1[currentNums2 + 1]) {
  			temp = nums1[currentNums2];
  			nums1[currentNums2] = nums1[currentNums2 + 1];
  			nums1[currentNums2 + 1] = temp;
  			currentNums2++;
  		}
  		i++;
  	} else {
  		if(nums1[m + j] < nums1[i]) {
	  		j++;
  		} else {
  			i++;
  		}
  	}
  }
};

var listOne = [1,2,3];
var listTwo = [2,5,6];

merge(listOne, 3, listTwo, 3);
console.log(listOne);