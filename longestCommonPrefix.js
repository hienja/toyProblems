/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return "";
  }
  if(strs.length === 1) {
    return strs[0];
  }
  var commonPrefix = "";
  var count = 0;
  var condition = true;

  while(condition && count < strs[0].length) {
    for(var i = 1; i < strs.length; i++) {
      if(strs[i][count] !== strs[0][count] || strs[0] === "") {
        condition = false;
      }
    }

    if(condition) {
      commonPrefix += strs[0][count];
    }

    count++;
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(["d", "d", "d"]))