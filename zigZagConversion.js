/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

var convert = function(s, numRows) {
  if(numRows === 1 || numRows === 0) {
    return s;
  }
  var zigZagWord = '';
  for(var i = 0; i < numRows; i++) {
    for(var j = i; j < s.length; j += numRows + numRows - 2) {
      var current = i;
      if(current === 0 || current === numRows - 1) {
        zigZagWord += s[j];
      } else {
        zigZagWord += s[j];
        if(j + numRows + numRows - 2 - 2 * current < s.length) {
          zigZagWord += s[j + numRows + numRows - 2 - 2 * current];
        }
      }
    }
  }

  return zigZagWord;
};

console.log(convert("PAYPALISHIRING", 4))