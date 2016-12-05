/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.

 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
*/

var NumArray = function(nums) {
  this.list = nums;
  this.halfList = [];

  for(var i = 0; i < Math.floor(nums.length / 2) + 1; i++) {
    if(nums[i * 2 + 1] === undefined) {
      this.halfList[i] = nums[i * 2];
    } else {
      this.halfList[i] = nums[i * 2] + nums[i * 2 + 1];
    }

  }    
};

NumArray.prototype.sumRange = function(i, j) {
  var sum = 0;

  for(var k = Math.floor(i / 2); k < Math.floor(j / 2) + 1; k++) {
    sum += this.halfList[k];
  }

  if(i % 2 !== 0) {
    sum -= this.list[i - 1];
  }

  if(j % 2 === 0) {
    if(this.list[j + 1] !== undefined) {
      sum -= this.list[j + 1];
    }
  }

  return sum;
};

var object = new NumArray([1, 4, -6])
console.log(object.halfList)
console.log(object.sumRange(0,2));