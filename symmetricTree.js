/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
*/

var isSymmetric = function(root) {
	return !root || compareNodes(root.left, root.right);
};

var compareNodes = function(left, right) {
	if (left === null || right === null) return right === left;
	if (left.val !== right.val) {
		return false;
	}
	return compareNodes(left.left, right.right) && compareNodes(left.right, right.left);
};

var Node = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
};

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(2);
var node4 = new Node(3);
var node5 = new Node(4);
var node6 = new Node(4);
var node7 = new Node(3);

node3.left = node6;
node3.right = node7;
node2.left = node4;
node2.right = node5;
node1.left = node2;
node1.right = node3;

console.log(isSymmetric(node1));
