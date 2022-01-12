/*
Min Number Of Coins For Change
Given an array of positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins. In other words, if the denominations are [1, 5, 10], you have access to an unlimited amount of 1s, 5s, and 10s.

If it's impossible to make change for the target amount, return -1.

Sample Input
n = 7
denoms = [1, 5, 10]
Sample Output
3 // 2x1 + 1x5
*/



function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
	// n = 7 denom = [1,2,3,5,6]
	const coins = new Array( n + 1).fill(Infinity);
	coins[0] = 0;
	denoms.forEach((denom) =>{
		for(let j=0; j<coins.length; j++){
			if(denom <= j){
				coins[j] = Math.min(coins[j], coins[j - denom] + 1)
			}
		}
	})
	return coins[n] !== Infinity ? coins[n] : -1
	
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
