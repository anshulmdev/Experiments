/*
Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
Sample Output
[-1, 11] // the numbers could be in reverse order
*/





function twoNumberSum(array, targetSum) {
  // Write your code here.
	const sample = {};
	for (let index=0; index<array.length; index++){
		let num = array[index]
		sample[num] = index
		if(sample[targetSum - num] != undefined && sample[targetSum - num] != index){
			return [num, targetSum - num]
		}
	}
	return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
