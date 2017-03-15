/*
Implement int sqrt(int x).

Compute and return the square root of x.
*/

// var mySqrt = function(x) {
// 	var number = 0;
// 	var count = 0;
// 	var base = 1;
// 	// var ten = 1;
// 	var condition = true;
// 	while (condition) {
// 		if((number + count * base) * (number + count * base) === x) {
// 			condition = false;
// 			return number + count * base;
// 		} else if (((number + count * base) * (number + count * base)) > x) {
// 			return number += (count - 1) * base;
// 			// count = 0;
// 			// ten *= 10;
// 			// base = 1 / ten;
// 			// if (base === .001) {
// 			// 	return number;
// 			// }
// 		} else {
// 			count++;
// 		}
// 	}
// };

var mySqrt = function(x) {
	if (x === 0) return 0;
	var left = 1;
	var right = x;
	while (true) {
		var mid = Math.floor(left + (right - left) / 2);
		if (mid * mid > x) {
			right = mid - 1;
		} else {
			if((mid + 1) * (mid + 1) > x) {
				return mid;
			}
			left = mid + 1;
		}
	}
};

console.log(mySqrt(4))