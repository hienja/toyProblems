/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
*/
var deleteDuplicates = function(head, val) {
	if (head === null) return null;
	if (val === undefined || head.val !== val) {
		head.next = deleteDuplicates(head.next, head.val);
		return head;
	} else {
		if (head.next) {
			return deleteDuplicates(head.next, val);
		} else {
			return null;
		}
	}
};

var deleteDuplicates = function(head) {
	if (head === null || head.next === null) return head;
	head.next = deleteDuplicates(head.next);
	return head.val === head.next.val ? head.next : head;
};

var ListNode = function(val) {
	this.val = val;
	this.next = null;
};

var list1 = new ListNode(1);
var list2 = new ListNode(1);
var list3 = new ListNode(2);
var list4 = new ListNode(3);
var list5 = new ListNode(3);

list4.next = list5;
list3.next = list4;
list2.next = list3;
list1.next = list2;

console.log(JSON.stringify(deleteDuplicates(list1)));
