/*
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?
*/

var reverseBits = function(n) {
  var binary = n.toString(2);
  var reverse = '';

  for(var i = binary.length - 1; i >= 0; i--) {
    reverse += binary[i];
  }

  for(var j = 0; j < 32 - binary.length; j++) {
    reverse += "0";
  }

  return parseInt(reverse, 2);
};

console.log(reverseBits(43261596))