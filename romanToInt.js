var romanToInt = function(s) {
	s = s.toUpperCase();
	var sum = romanNumerals[s[s.length - 1]];
    for(var i = s.length - 2; i >= 0; i--) {
    	var currentNumber = romanNumerals[s[i]];
    	var previousNumber = romanNumerals[s[i + 1]]
    	if(currentNumber < previousNumber) {
    		if(Math.floor(sum / currentNumber) === 5 || Math.floor(sum / currentNumber) === 10) {
    			sum -= romanNumerals[s[i]];
    		} else {
    			console.log(sum)
    			return false;
    		}
    	}  else {
    		if(currentNumber  === previousNumber) {
    			if(Math.floor(currentNumber / 5) % 2 === 0) {
    				if(Math.floor(sum / currentNumber) < 3) {
    					sum += romanNumerals[s[i]]
    				} else {
    					return false;
    				}
    			} else {
    				return false;
    			}
    		} else {
    			sum += romanNumerals[s[i]];
    		}
    	}
    }

    return sum;
};

var romanNumerals = {
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000
};


console.log(romanToInt("MCMXCVI"));