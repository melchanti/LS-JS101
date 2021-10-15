/*
Problem:
  Input: Matrix
  Output: Matrix
  Rules:
    1. Rotate the matrix 90 degrees
    2. [0,0   0,1   0,2]
       [1,0   1,1   1,2]
       [2,0   2,1   2,2]
       [3,0   3,1   3,2]

       [3,0   2,0   1,0   0,0]
       [3,1   2,1   1,1   0,1]
       [3,2   2,2   1,2   0,2]
       To rotate an array 90 degrees, we place the column in the row in reverse order.
Examples: Given
Data Structures: Arrays
Algorithm:
  1. Create an array with the number of columns the same as the number of rows of the original array
  2. Push the first column and the last row value into the first column and first row value of the new array
  3. Repeat step 2 for all the columns of the new array
  4. Repeat steps 2-3 for all the columns in the current row of the original array
*/

function rotate90 (matrix) {
  let returnedMatrix = [];

  for (let index = 0; index < matrix[0].length; index += 1) {
    returnedMatrix.push([]);
  }

  returnedMatrix.forEach ((_, rowIndex) => {
    matrix.forEach ((_, colIndex) => {
      returnedMatrix [rowIndex][colIndex] = matrix [matrix.length - 1 - colIndex][rowIndex];
    })
  });

  return returnedMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]