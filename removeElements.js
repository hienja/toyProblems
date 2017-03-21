/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var currentHead = head;
    var previousHead;
    while(currentHead) {
    	if(currentHead.val === val) {
    		if(previousHead) {
	    		previousHead.next = currentHead.next;
    		} else {
    			head = head.next;
    		}
    	} else {
    		previousHead = currentHead;
    	}

    	currentHead = currentHead.next;
    }

    return head;
};

var ListNodes = function(value) {
	this.val = value;
	this.next = null;
};

var firstNode = new ListNodes(1);
var secondNodes = new ListNodes(4);
var thirdNodes = new ListNodes(7);
secondNodes.next = thirdNodes;
firstNode.next = secondNodes;

console.log(removeElements(firstNode, 1));