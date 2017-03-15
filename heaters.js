/*
Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.

So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

Note:
1. Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
2. Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
3. As long as a house is in the heaters' warm radius range, it can be warmed.
4. All the heaters follow your radius standard and the warm radius will the same.

Example 1:
Input: [1,2,3],[2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

Example 2:
Input: [1,2,3,4],[1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
*/

var findRadius = function(houses, heaters) {
	houses = houses.sort();
    heaters = heaters.sort();
	var firstHouse = houses[0];
	var lastHouse = houses[houses.length - 1];
	var firstHeater = heaters[0];
	var lastHeater = heaters[heaters.length - 1]
	var closestHeaterFromLastHouse;
	var closestHeaterFromFirstHouse;
    var radiusBetweenHeaters = 0;
    var firstHouseToFirstHeater = 0;
    var lastHousetoLastHeater = 0;

    for (var i = 0; i < heaters.length; i++) {
    	var currentHeater = heaters[i];
    	var previousHeater = heaters[i - 1];
    	if (currentHeater < firstHouse) {
    		closestHeaterFromLastHouse = lastHouse - currentHeater;
    	} else if (currentHeater > lastHouse) {
    		if (!closestHeaterFromFirstHouse) {
    			if (previousHeater && previousHeater >= firstHouse) {
					var radius = currentHeater - previousHeater;
	    			if (radius % 2 !== 0) {
	    				radius--;
	    			}
	    			radius /= 2;
    				lastHousetoLastHeater = Math.min(lastHouse - previousHeater, radius);
    			}
				closestHeaterFromFirstHouse = currentHeater - firstHouse;
    		}
    	} else {
    		if (previousHeater) {
    			var radius = currentHeater - previousHeater;
    			if (radius % 2 !== 0) {
    				radius--;
    			}
    			radius /= 2;
    			if (radius > radiusBetweenHeaters) {
    				radiusBetweenHeaters = radius;
    			}

    			if (!firstHouseToFirstHeater) {
					var radius = currentHeater - previousHeater;
	    			if (radius % 2 !== 0) {
	    				radius--;
	    			}
	    			radius /= 2;
    				firstHouseToFirstHeater = Math.min(currentHeater - firstHouse, radius);
    			}
    		} else {
				firstHouseToFirstHeater = currentHeater - firstHouse;
    		}
    		if (i === heaters.length - 1 && !closestHeaterFromFirstHouse) {
				lastHousetoLastHeater = lastHouse - previousHeater;
    		}
    	}
    }
    var insideRadius = Math.max(radiusBetweenHeaters, firstHouseToFirstHeater, lastHousetoLastHeater);
    var outsideRadius;
    if (closestHeaterFromLastHouse && closestHeaterFromFirstHouse) {
    	outsideRadius = Math.min(closestHeaterFromLastHouse, closestHeaterFromFirstHouse);
    } else if (closestHeaterFromLastHouse) {
    	outsideRadius = closestHeaterFromLastHouse;
    } else {
    	outsideRadius = closestHeaterFromFirstHouse;
    }

    return insideRadius ? insideRadius : outsideRadius;
};

console.log(findRadius([282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923],
[823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612])) //answer is 161834419