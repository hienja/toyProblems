/* Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front. */

var myAtoi = function(str) {
  str = str.trim();
  var negative = false;
  if(str[0] === '-' || str[0] === '+') {
    if(str[0] === '-') {
      negative = true;
    }
    str = str.slice(1);
  }

  //Regular expression to find a character that isn't a number or decimal. Regular expression for numbers and decimal is '^[0-9.]+$'.
  var notValid = new RegExp(/[^0-9.]+/g);
  var match = notValid.exec(str);
  if(match) {
    str = str.slice(0, match.index);
  }
  //Regular expression for '.' appearing only once.
  var decimal = new RegExp('^[^.]*.[^.]*$');  

  if(decimal.test(str)) {
    if(str.includes('.')) {
      str = str.split('.');
      var wholeLength = str[0].length;
      var decimalLength = str[1].length;
      var integer = 0;
      var tensPlace = 0;

      for(var i = wholeLength - 1; i >= 0; i--) {
        var tens = Math.pow(10, tensPlace);
        integer += Number(str[0][i]) * tens;
        tensPlace++;
      }

      tensPlace = 1;
      for(var j = 0; j < decimalLength; j++) {
        var tens = Math.pow(10, tensPlace);
        integer += Number(str[1][j]) / tens;
        tensPlace++;
      }

      return negative ? integer * -1 : integer;
    } else {
      var length = str.length;
      var integer = 0;
      var tensPlace = 0;

      for(var i = length - 1; i >= 0; i--) {
        var tens = Math.pow(10, tensPlace);
        integer += Number(str[i]) * tens;
        tensPlace++;
      }

      var integerMax = 2147483647;
      var integerMin = -2147483648;
      integer = negative ? integer * -1 : integer;
      integer = integer > integerMax ? integerMax : integer;
      integer = integer < integerMin ? integerMin : integer;
      return integer;
    }
  } else {
    return 0;
  }
};

console.log(myAtoi("  -001242"));