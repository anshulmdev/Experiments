/*
Move Element To End
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

Sample Input
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
Sample Output
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently


*/


function moveElementToEnd(array, toMove) {
    // [4, 2, 3, 2, 2, 1, 2, 5, 2]
      
      let i = 0;
      let j = array.length - 1;
      // O(n) and O(1)
      while(i < j) {
          if (array[j] === toMove) j--
          else {
              if (array[i] != toMove) i++
              else {
                  let temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
                  i++;
                  j--;
              }
          }
      }
      return array
      
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  