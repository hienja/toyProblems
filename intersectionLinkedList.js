/*
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   \
                     c1 → c2 → c3
                   /            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

1. If the two linked lists have no intersection at all, return null.
2. The linked lists must retain their original structure after the function returns.
3. You may assume there are no cycles anywhere in the entire linked structure.
4. Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var container = {};
  var intersection = null;
  while (headA) {
  	container[headA.val] = headA;
  	headA = headA.next;
  }
  while (headB) {
    if (container[headB.val]) {
    	intersection = container[headB.val];
    	headB = null;
    } else {
    	headB = headB.next;
    }
  }  
  
  return intersection;
};