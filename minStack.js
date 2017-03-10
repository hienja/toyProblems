/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];
	this.key = 0;
	this.min;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.key] = x;
    this.key++;
    if(this.min === undefined) {
    	this.min = x;
    } else if (x < this.min) {
    	this.min = x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var top = this.stack[this.key - 1];
    delete this.stack[this.key - 1];
    if(this.key !== 0) {
    	this.key--;
    }
    if (this.min === top) {
    	this.min = this.stack[0];
    	for (var i = 1; i < this.key; i++) {
    		if (this.stack[i] < this.min) {
    			this.min = this.stack[i];
    		}
    	}
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.key - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack;
obj.push(2);
obj.push(3);
obj.push(1);
obj.push(0);
obj.push(5);
console.log(obj.top());
console.log(obj.getMin())
