/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
  var list = {};
  var indices;

  for(var i = 0; i < nums.length; i++) {
    if(list[nums[i]]) {
      list[nums[i]].push(i)
    } else {
      list[nums[i]] = [i];
    }
  }

  for(var key in list) {
    if(list[target - key]) {
      if(list[target - key].length === 2) {
        indices = list[key];
      } else {
        indices = list[key].concat(list[target - key]);
      }
      break;
    }
  }

  return indices;
};

console.log(twoSum([2,3,4], 6))