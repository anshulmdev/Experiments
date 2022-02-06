/*
Levenshtein Distance
Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.

There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.

Sample Input
str1 = "abc"
str2 = "yabd"
Sample Output
2 // insert "y"; substitute "c" for "d"
*/

function levenshteinDistance(str1, str2) {
	const matrix = Array(str1.length + 1).fill().map(()=>Array(str2.length + 1).fill())
	matrix[0][0] = 0
	for( let i=0; i< str1.length + 1; i++){
		for (let j=0; j<str2.length + 1; j++){
			if (i ===0 || j ===0) {
				if (i === 0 & j!=0) matrix[i][j] = matrix[i][j - 1] + 1
				if (j === 0 & i!=0) matrix[i][j] = matrix[i - 1][j] + 1
			}
			else {
				if(str1[i-1] === str2[j-1]) matrix[i][j] = matrix[i - 1][j - 1]
				else matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) 
			}
		}
	}
	return matrix[str1.length][str2.length]
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
