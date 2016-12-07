/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

var strStr = function(haystack, needle) {
  if(needle === ""){
    return 0;
  }
  var index = -1;

  for(var i = 0; i < haystack.length && index === -1; i++) {
    if(haystack[i] === needle[0]) {
      var condition = true;
      var needleLength = needle.length -1;
      var endNeedle = i + needleLength;
      var firstOccurrence = i;
      for(var j = needleLength; j >= 0; j--) {
        if(needle[j] !== haystack[endNeedle]) {
          condition = false;
          break;
        } else {
          endNeedle--;
        }
      }
      if(condition) {
        index = firstOccurrence;
      }
    }
  }

  return index;  
};

console.log(strStr("miss", "miss"))