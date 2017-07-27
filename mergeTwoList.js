var mergeTwoLists = function(l1, l2) {
	if(l2 === null) return l1;
	if(l1 === null) return l2;

	if(l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l2.next, l1);
		return l2;
	}
};

var NodeList = function(val) {
	this.val = val;
	this.next = null;
}

var list1 = new NodeList(1);
var list2 = new NodeList(2);
var list3 = new NodeList(3);
var list4 = new NodeList(4);
var list5 = new NodeList(5);
var list6 = new NodeList(6);

list2.next = list3;
list1.next = list2;
list5.next = list6;
list4.next = list5;

console.log(mergeTwoLists(list1, list4));