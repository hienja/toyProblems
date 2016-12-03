/*
Description:

Count the number of prime numbers less than a non-negative number, n.
*/

//Slower Variation
// var countPrimes = function(n) {
//   var count = 0;
//   var primeNumber = [];

//   for(var i = 2; i < n; i++) {
//     var condition = true;
//     for(var j = 0; j < primeNumber.length && primeNumber[j] < Math.floor(n / 2) + 1 && condition; j++) {
//       if(i % primeNumber[j] === 0) {
//         condition = false;
//       }
//     }

//     if(condition) {
//       count++;
//       primeNumber.push(i);
//     }
//   }

//   return count;    
// };

var countPrimes = function(n) {
  var numberList = {};
  var count = 0;
  for (var i = 2; i < n; i++) {
    if (!numberList[i]) {
      count++;
      for (var j = i; j < n; j += i) {
          numberList[j] = true;
      }
    }
  }
  return count;
};

console.log(countPrimes(499979))
