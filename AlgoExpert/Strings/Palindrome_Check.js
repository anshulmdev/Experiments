/*
Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

Sample Input
string = "abcdcba"
Sample Output
true // it's written the same forward and backward
*/


function isPalindrome(string) {
	// "abcdcba"
  for(let i=0; i < parseInt(string.length/2); i++){
		if (string[i] != string[string.length - (i+1)]) return false
	}
	return true
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
