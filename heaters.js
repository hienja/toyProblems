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
	houses = houses.sort(function(a,b){return a - b});
    heaters = heaters.sort(function(a,b){return a - b});
    var minRadius = 0;
    var combinedList = [];
    var i = 0;
    var j = 0;
    var condition = true;
    while (condition) {
        if (houses[i] > heaters[j] || i === houses.length) {
            combinedList.push([heaters[j], 'heater']);
            j++;
        } else if (houses[i] < heaters[j] || j === heaters.length) {
            combinedList.push([houses[i], 'house']);
            i++;
        } else {
            combinedList.push([heaters[j], 'heater']);
            i++;
            j++;
        }


        if (i === houses.length && j === heaters.length) {
            condition = false;
        }
    }

    for (var k = 0; k < combinedList.length - 1; k++) {
        if (combinedList[k][1] !== combinedList[k + 1][1]) {
            var radius = combinedList[k + 1][0] - combinedList[k][0];
            if (radius > minRadius) {
                minRadius = radius;
            }
        }
    }

    return minRadius;
};

// console.log(findRadius([282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923],
// [823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612])) //answer is 161834419
console.log(findRadius([1,2,3,4], [1,4]))