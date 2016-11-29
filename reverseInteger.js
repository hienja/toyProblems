/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/

var reverse = function(x) {
  var string = JSON.stringify(x);
  var length = string.length;
  var negative = string[0] === "-" ? true : false;
  var answer = negative ? "-" : "";

  for(var i = length - 1; i >= negative ? 1 : 0; i--) {
    answer += string[i];
  }

  return Number(answer) > 2147483647 || Number(answer < -2147483648) ? 0 : Number(answer);
};