/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0
Sample Output
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/


function threeNumberSum(array, targetSum) {
	array.sort((a,b) => a-b);
	const finalAnswer = []
	let currentNumber = 0;
	
	while(currentNumber < array.length - 1) {
		let leftNumber = currentNumber + 1;
		let rightNumber = array.length - 1;
		while (leftNumber < rightNumber) {
			const currentSum = array[currentNumber] + array[leftNumber] + array[rightNumber];
			if (currentSum === targetSum) {
				finalAnswer.push([array[currentNumber], array[leftNumber], array[rightNumber]])
				leftNumber += 1
				rightNumber -= 1
			}
			else if (currentSum < targetSum) leftNumber += 1
			else if (currentSum > targetSum) rightNumber -= 1
		}
		currentNumber ++
	}
	
	
	return finalAnswer
}
// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
