/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
*/

var rotate = function(nums, k) {
  var length = nums.length;
  var list = {};
  for(var i = 0; i < length; i++) {
    list[(i + k) % length] = nums[i];
  }

  for(var j = 0; j < length; j++) {
    nums[j] = list[j];
  }
};

// var rotate = function(nums, k) {
//   k = k % nums.length;
//   for(var i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
// };