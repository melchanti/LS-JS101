/*
Problem:
  Input: Array
  Output: Same Array sorted
  Rules:
    1. Sort the array in place using the bubble sort
    2. Bubble Sort:
      a. Loop through the array once, comparing the two consecutive arrays and swapping their places if necessary
      b. Repeat the loop until there are no swaps
Examples: Given
Data Structure: Array
Algorithm: 
  1. Initialize a boolean for whether a swap has been made (swapped) and set it to false
  2. Loop until the second last item in the array
    a. if the first item is bigger than the item that comes after it, swap them
    b. if there's a swap set the value of the swapped to true
  3. Repeat steps 1-2 until there are no swaps
*/

function bubbleSort (array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]