/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
*/

var convertToTitle = function(n) {
  if(n === 0) {
      return "";
  }
  var title = "";
  var remainder = n % 26;
  
  while(n > 26) {
    var temp = n;
    var count = 0;
    while(temp > 26) {
      temp = Math.floor(temp / 26);
      count++;
    }
    if(remainder === 0) {
      title += alphabet[temp - 1];
    } else {
      title += alphabet[temp];
    }
    n = n - temp * Math.pow(26, count);
  }

  title += alphabet[remainder];
  
  return title;
};

var alphabet = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
  0: "Z"
};