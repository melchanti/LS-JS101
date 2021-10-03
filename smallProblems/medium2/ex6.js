/*
Problem:
  Input: Number
  Output: Number
  Rules:
Example: Given
Data Structure: Array
Algoirthm:
  1. Find the sum of the first n integers
  2. Square teh sum of the integers
  3. Find the square of all the integers until the n number
  4. Sum the squares
  5. Subtract the sum suared from the sum of the squares
*/

function sumNumbers (accum, num) {
  return accum + num;
}

function squaresSummed (accum, num) {
  return accum + (num ** 2);
}

function sumSquareDifference (nth) {
  let arrayOfNumbers = [...Array(nth + 1).keys()];

  let sumSquarred = (arrayOfNumbers.reduce (sumNumbers, 0)) ** 2;

  let sumOfSquares = arrayOfNumbers.reduce (squaresSummed, 0);

  let sumsDifference = sumSquarred - sumOfSquares;

  console.log (sumsDifference);

  return (sumsDifference);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150