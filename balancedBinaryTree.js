/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/
var isBalanced = function(root) {
	if (root === null) return true;
	var right = checkForDepth(root.right, 1);
	var left = checkForDepth(root.left, 1);
	return Math.abs(left - right) <= 1 && isBalanced(root.right) && isBalanced(root.left);
};
var checkForDepth = function(root, depth) {
	if (root === null) return depth ? depth - 1 : 0;
	var right = checkForDepth(root.right, depth + 1);
	var left = checkForDepth(root.left, depth + 1);
	return Math.max(right, left);
};

var isBalanced = function(root) {
	return checkForDepth(root) !== -1;
};
var checkForDepth = function(root) {
	if (root === null) return 0;
	var left = checkForDepth(root.left);
	if (left === -1) return -1;
	var right = checkForDepth(root.right);
	if (right === -1) return -1;

	if (Math.abs(left - right) > 1) return -1;
	return Math.max(left, right) + 1;
};

var Tree = function(val) {
	this.val = val;
	this.left = this.right = null;
};

var node1 = new Tree(1);
var node2 = new Tree(2);
var node3 = new Tree(3);
var node4 = new Tree(4);
var node5 = new Tree(5);
var node6 = new Tree(6);
var node7 = new Tree(7);
var node8 = new Tree(8);

node2.left = node1;
node2.right = node3;
node4.left = node2;
node6.left = node5;
node6.right = node7;
node4.right = node6;

console.log(isBalanced(node4));
