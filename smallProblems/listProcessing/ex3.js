/*
Problem: 
Input: two arrays with integers
Output: A sorted array with all possible multiples in both arrays
Explicit requirements: Returned array should be sorted
Neither argument will be empty.

Examples: Given

Data Structures: Multiples will be organized in an array

Algorithm:
1. Choose an array to start with, it doesn't matter which array
2. Multiply the element with each of the elements of the second array
  a. Multiply the element of the first array with an element of the second array
  b. place the multiplied value in a new array
  c. repeat a-b for all the elements of the second array
3. Add the returned array in the overall array
4. Repeat steps 2-3 for all elements of the second array
5. Sort the return array

*/

function multiplyAllPairs (arrray1, array2) {
  let multiplesArray = [];

  arrray1.forEach ( firstValue => {
    multiplesArray = multiplesArray.concat(
      array2.map(secondValue => firstValue * secondValue ))
  });

  return multiplesArray.sort((a, b) => a - b);
}

multiplyAllPairs ([2, 4], [4, 3, 1, 2]);