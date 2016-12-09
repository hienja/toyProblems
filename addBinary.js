/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

var addBinary = function(a, b) {
  // var aLength = a.length;
  // var bLength = b.length;
  // var sum = "";
  // var carryOver = 0;

  // while(aLength || bLength || carryOver) {
  //   var addingBits = 0;
  //   if(aLength) {
  //     addingBits += a[aLength - 1] === "0" ? 0 : 1;
  //     aLength--;
  //   }
  //   if(bLength) {
  //     addingBits += b[bLength - 1] === "0" ? 0 : 1;
  //     bLength--;
  //   }
  //   if(carryOver) {
  //     addingBits += carryOver;
  //     carryOver--;
  //   }
  //   if(addingBits > 1) {
  //     addingBits -= 2;
  //     carryOver++;
  //   }
  //   sum = addingBits + sum;
  // }

  // return sum;

  return (parseInt(a, 2) + parseInt(b, 2)).toString(2) 
};

console.log(addBinary('11', '1'))