/*
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/

var findNthDigit = function(n) {
  var list = [9, 90, 900, 9000, 90000, 900000, 9000000, 90000000];
  var digits = 1;
  var count = 1;
  for(var j = 0; j < list.length; j++) {
    if(count + list[j] * digits < n ) {
      count = Math.pow(10, digits);
      n -= list[j] * digits;
      digits++;
    } else {
      break;
    }
  }

  var sequence = "";
  var place = Math.floor((n - 1)/ digits);
  sequence += count + place;
  var remainder = n % digits === 0 ? digits : n % digits;

  return Number(sequence[remainder - 1]);
};

console.log(findNthDigit(10000000));