/*
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

var isSameTree = function(p, q) {
	if (!p || !q) return p === q;
	if (p.val === q.val) {
		return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
	}
	return false;
};

var Node = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
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

console.log(isSameTree(node3, node4));
