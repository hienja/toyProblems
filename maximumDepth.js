/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

var maxDepth = function(root, depth) {
	depth = depth ? depth : 0;
	if (root) {
		depth++;
		var left = maxDepth(root.left, depth);
		var right = maxDepth(root.right, depth);
		return Math.max(left, right);
	} else {
		return depth;
	}
};

var Node = function(val) {
	this.val = val;
	this.right = null;
	this.left = null;
};

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);

node2.left = node1;
node3.left = node2;
node5.right = node6;
node4.right = node5;
node3.right = node4;

console.log(maxDepth(node3));
