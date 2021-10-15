/*
Problem:
  Input: An odd number representing the grid for the diamond
  Output: A string of the diagram of the diamond
  Rules:
    1. Same number of vertical stars in the middle as the number of horizontal stars in the middle
    2. Start the first star in the middle column
    3. Each row increase the number of stars by one from either side
    3. The middle row should have the maximum number of stars
    4. Decrease the number of stars by 2 at each row after the middle
Examples: Given
Data Structure: array of strings
Algorithm:
  1. Fill the mth index of the array with 1 + (2*m) stars, if m <= n / 2 where n is the total number of rows
  2. Fill the mth index of the array with 1 + (2 * n - m - 1) if m > n
  3. Do the above steps for all the items of the array
  4. Loop through the array, printing each row with padding the left
  5. let's do an example for number 5
    3
    4
    5
    4
    3
*/

function displayDiamond (array) {
  array.forEach ((value, index) => {
    if (index < array.length / 2) {
      console.log (value.padStart((Math.ceil(array.length / 2.0) + index) , ' '));
    } else {
      console.log (value.padStart(Math.floor((array.length - index) + array.length / 2, ' ')));
    }
  });
}
function diamond (numberOfStars) {
  let printedArray = [];

  for (let index = 0; index < numberOfStars; index += 1) {
    if (index <= numberOfStars / 2){
      printedArray.push (`${'*'.repeat(1 + (2 * index))}`);
    } else if (index > (numberOfStars / 2)) {
      printedArray.push (`${'*'.repeat(1 + (2 * (numberOfStars - index - 1)))}`);
    }
  }

  displayDiamond (printedArray);

}

//diamond (5);
diamond(100);