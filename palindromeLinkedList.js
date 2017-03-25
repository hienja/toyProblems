/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	var forward = "";
	var reverse = "";

	while(head) {
		forward += head.val;
		reverse = head.val + reverse;
		head = head.next;
	}

	return forward === reverse ? true : false;
};

var Node = function(value) {
	this.val = value;
	this.next = null;
}

var first = new Node("a");
var second = new Node("b");
var third = new Node("c");

second.next = third;
first.next = second;

console.log(isPalindrome(first));