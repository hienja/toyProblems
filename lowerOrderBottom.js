/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

var levelOrderBottom = function(root, depth, bottomFirstList) {
	depth = depth ? depth : 0;
	bottomFirstList = bottomFirstList ? bottomFirstList : [];
	if (root) {
		if (depth >= bottomFirstList.length) {
			bottomFirstList.unshift([root.val]);
		} else {
			bottomFirstList[bottomFirstList.length - 1 - depth].push(root.val);
		}
		depth++;
		bottomFirstList = levelOrderBottom(root.left, depth, bottomFirstList);
		bottomFirstList = levelOrderBottom(root.right, depth, bottomFirstList);
	}

	return bottomFirstList;
};

var Node = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
};

var node1 = new Node(3);
var node2 = new Node(9);
var node3 = new Node(20);
var node4 = new Node(15);
var node5 = new Node(7);

node1.left = node2;
node3.left = node4;
node3.right = node5;
node1.right = node3;

console.log(levelOrderBottom(node1));
