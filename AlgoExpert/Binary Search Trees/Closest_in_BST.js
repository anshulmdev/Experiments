/*

Find Closest Value In BST
Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

Sample Input
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
target = 12
Sample Output
13

*/


function findClosestValueInBst(tree, target) {
  // Write your code here.
	return solve(tree, target, tree.value)
	// tree, 12, 10
}

function solve(tree, target, closest){
	if (tree === null) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) closest = tree.value;
	if (tree.value > target) {
		return solve(tree.left, target, closest)
	} else if (tree.value < target) {
		return solve(tree.right, target, closest)
	} else {
		return closest;
	}
	
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
