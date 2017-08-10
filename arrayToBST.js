/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/
var sortedArrayToBST = function(nums) {
	if (nums.length === 0) return null;
	if (nums.length === 1) return new TreeNode(nums[0]);
	var length = nums.length;

	if (length % 2 === 0) {
		var middlePoint = length / 2 - 1;
	} else {
		var middlePoint = Math.floor(length / 2);
	}

	var head = new TreeNode(nums[middlePoint]);
	head.left = sortedArrayToBST(nums.slice(0, middlePoint));
	head.right = sortedArrayToBST(nums.slice(middlePoint + 1, length));

	return head;
};

var TreeNode = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
};

console.log(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9]));
