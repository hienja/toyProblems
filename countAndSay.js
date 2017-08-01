/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a sequence.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/

var countAndSay = function(n, sequence) {
	sequence = sequence ? sequence : "1";
	if(n <= 1) return parseInt(sequence);
	
	let accumulation = "";
	let count = 1;
	let length = sequence.length;
	for(let i = 1; i < length; i++) {
		if(sequence[i] !== sequence[i - 1]){
			accumulation += count + sequence[i - 1];
			count = 1;
		} else {
			count++;
		}
	}

	accumulation += count + sequence[sequence.length - 1];
	sequence = accumulation;
	return countAndSay(n - 1, sequence);
};

var countAndSay = function(n, sequence) {
	sequence = sequence ? sequence : ["1"];
	if(n <= 1) return sequence.reduce((acc, value) => {return acc + value});

	sequence = sequence.reduce((acc, value, i, seq) => {
		if(value == seq[i - 1]){
			acc[acc.length - 2]++;
			return acc;
		} else {
			value += '';
			acc.push(1, value);
			return acc;
		}
	}, []);

	return countAndSay(n - 1, sequence);
};

console.log(countAndSay(6));