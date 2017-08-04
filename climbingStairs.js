/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/
var climbStairs = function(n) {
	var count = 0;
	if (n - 1 > 0) {
		count += climbStairs(n - 1);
	} else if (n - 1 === 0) {
		count++;
	}

	if (n - 2 > 0) {
		count += climbStairs(n - 2);
	} else if (n - 2 === 0) {
		count++;
	}

	return count;
};

var climbStairs = function(n) {
	var fibonacci = {
		0: 1,
		1: 1
	};
	if (n === 0 || n === 1) return fibonacci[n];

	var count = 2;
	while (count <= n) {
		fibonacci[count] = fibonacci[count - 1] + fibonacci[count - 2];
		count++;
	}

	return fibonacci[n];
};

var climbStairs = function(n) {
	var currentStep = 1;
	var nextStep = 1;
	while (n) {
		nextStep += currentStep;
		currentStep = nextStep - currentStep;
		n--;
	}

	return currentStep;
};

console.log(climbStairs(8));

//1, 2, 3, 5, 8, 13, 21
