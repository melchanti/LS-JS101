/*
Algorithm:
  [0,0  0,1   0,2   0,3]

  [0,0]
  [1,0]
  [2,0]
  [3,0]

  1. Create a new array that has the same number of rows as the number of columns of the first item
  2. In the first row and first column index, place the first row and the first column index of the original
  3. In the first row and second column index, place the second row and the first column index of the original
  4. Repeat until the columns of the original array is completed
  5. Repeat steps 2-4 until the rows of the original array is completed
*/
function transpose (matrix) {
  let returnedMatrix = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    returnedMatrix.push([]);
  }
  returnedMatrix.forEach ((_, rowIndex) => {
    matrix.forEach ((_, colIndex) => {
      returnedMatrix[rowIndex][colIndex] = matrix[colIndex][rowIndex];
    })
  });

  return returnedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log (transpose([[1,2,3,4]]));
console.log (transpose([[1], [2], [3], [4]]));
console.log (transpose([[1]])); 

console.log (transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));