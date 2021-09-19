/*

Imagine a sequence of consecutive event integers beginning with 2. The integers are grouped in
rows, with the first row containing one integer, the second rwo two integers, the third row three
integers, and so on. Given and integer representing the number of a particular row, return an
integer representing the sum of all the integers in that row.

P -
- sequence of integers
- sequence begins with two
- Integers are consecutive
- Sequence is grouped in to rows
- Each row incrementally larger: 1, 2, 3, ...
- Row 'number' equals the number of elements in the row
 - Row 1 has 1 element, row 2 has 2 elements, ...
- Input: a single integer
 - Identifies a 'row', which is a subset of a sequence of integers
- output: a sinle integer
  - The sum of the integers in the row identified by the input integer
- sequence:
2, 4, 6, 8, 10, 12, 14, 16, 18, ...

2
4, 6
8, 10, 12
14, 16, 18, 20
....

Examples -

Input: 1
Output: 2

Input: 5
Output: 22 + 24 + 26 + 28 + 30

Input: 0
Output: 0

DATA Structures -

- overall structure representing sequence as a whole
- Individual rows within overall structure
- Individual rows in a set order in context of sequence
- Individual rows certain integers
- Can assume that integers are in a set order in the context of the sequence
[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20],
  ....
]

Input: one integer
Output: one integer

A : Algorithms-

My Solution:

  Given a number representing the row number


  Find how many numbers are in that row
    ==========
    numbersInRow = rowNumber;
    ==========


  Find what the starting integer of that row is
    ==========
    This seems to need a recursion problem, where each call to the function
    takes the argument of the previous row and returns the last index of the previous row

    PreviousRowLastInteger = getLastInteger (rowNumber - 1);

    getLastInteger(rowNumber)
    ==========
      if the row Number is equal to 1, return 2
      else{
        return getLastInteger(rowNumber - 1) + (rowNumber * 2)
      }
    ==========

    startingInteger = previousRowLastInteger + 2
    ==========


  Add all the numbers in that row and return the sum
    ==========

    LET sum = startingInteger;
    Set counter is equal to 2
    Loop while counter is less than or equal to the numbers of elements in the row
      LET currentNumber = startingInteger + 2
      sum +=   currentNumber
    ==========
  Display sum
  
Lecture Solution:
  1. Create an empty 'rows' array to contain all of the rows
  2. Create a 'row' array and add it to the overall 'rows' array
  3. Repeat step 2 until all the necessary rows have been created
      -All rows have been created when the length of the 'rows' array is equal to the input integer
  4. Sum the final row
  5. Return teh sum

  * Problem: Create a Row *

  Rules:
   - Row is an array
   - Array contain integers
   - Integers are consectutive even numbers
   - Integers in each row form part of an overall larger sequence
   - Rows are of different lengths
   - Input: the information needed to create the output
      - The starting integer
      - The length of the row
   - Output: the row itself: '[8, 10, 12]'

  Examples:
  start 2, length: 1 --> [2]
  start: 4, length 2 --> [4, 6]
  start: 8, length: 3 --> [8, 10, 12]

  Data Structures:
  - An array of integers

  Algorithm:
  1. Create an empty 'row' array to contain the integers
  2. Add the starting integer
  3. Increment the starting integer by 2 to get the next integer in the sequence
  4. Repeat steps 2 & 3 until the array has reached the correct length
  5. Return the 'row' array
*/


// Lecture Solution 

/*function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = rows[currentRowNum-1][currentRowNum-1] + 2;
  }
  return rows.pop().reduce ((sum, currentValue) => sum += currentValue, 0); //TODO: sum final row and return the sum
}

function createRow(startingInteger, rowLength) {
  const row = [];
  let currentInteger = startingInteger;

  while (row.length < rowLength) {
    row.push (currentInteger);
    currentInteger += 2;
  }
  return row;
}
*/

// MySolution
function sumEvenNumberRow (rowNumber) {

  let startInteger = 2;
  if (rowNumber !== 1){
    startInteger = getLastInteger(rowNumber - 1) + 2;
  }

  let sum = 0;
  let currentInteger = startInteger;

  for (let currentRowIndex = 0; currentRowIndex < rowNumber; currentRowIndex += 1) {
    sum += currentInteger;
    currentInteger += 2;
  }
  return sum;
}

function getLastInteger(rowNumber) {
  if (rowNumber === 1) return 2
  else {
    return getLastInteger(rowNumber - 1) + (rowNumber * 2)
  }
}
// row Number: 1 --> sum of integers in row: 2
// row Number: 2 --> sum of integers in row: 10
// row Number: 4 --> sum of integers in row: 68

console.log (sumEvenNumberRow(1)); //2
console.log (sumEvenNumberRow(2)); //10
console.log (sumEvenNumberRow(4)); //68

//console.log (getLastInteger(1)); //2
//console.log (getLastInteger(2)); //6
//console.log (getLastInteger(4)); //20

// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]
//console.log (createRow(2, 1)); // [2]
//console.log (createRow(4, 2)); // [4, 6]
//console.log (createRow(8, 3)); // [8, 10, 12]