/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
	var minDepth = Number.MAX_SAFE_INTEGER;
	var searchDepth = function(node, depth) {
		if(depth < minDepth) {
			if(node.left && node.right) {
				searchDepth(node.left, depth+1);
				searchDepth(node.right, depth+1);
			} else if(node.left) {
				searchDepth(node.left, depth+1);
			} else if(node.right) {
				searchDepth(node.right, depth+1);
			} else {
				minDepth = depth;
			}
		}
	}

	searchDepth(root, 1);

	return minDepth;
};

var Node = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
};

var first = new Node(4);
var second = new Node(2);
var third = new Node(5);
var fourth = new Node(6);
// var fifth = new Node(1);

// second.left = fifth;

third.right = fourth;
first.left = second;
first.right = third;

console.log(minDepth(first));