/*
Monotonic Array
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
Sample Output
true
*/


function isMonotonic(array) {
	if (array.length <= 2) return true
	let direction = null;
  for (let i=0; i<array.length; i++){
		if(!direction) {
			if(array[i+1] > array[i]) direction = 'positive'
			if(array[i] > array[i+1]) direction = 'negative'
		}
		if(direction === 'positive' && array[i+1] < array[i]) return false
		if(direction === 'negative' && array[i+1] > array[i]) return false
	}
	return true
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
