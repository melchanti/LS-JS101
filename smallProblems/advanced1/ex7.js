/*
Problem:
  Input: Array, search value
  Output: Number
  Rules:
    1. Perform a binary search of the value in the array
    2. If found return the index
    3. If not found, return -1
    4. Binary search is:
      a. Look at the middle value of the array
      b. Determine if the middle value is the search value or if it's bigger or smaller
      c. If it's bigger than the search value, discard the second half of the array
      d. Repeat a-c until you find the value
Examples: Given
Data Structure: array
Algorithm:
  1. Find the middle index of the array
  2. Compare the value at the middle index to the search value
  3. If it's bigger than the search value, dsicard the second half
  4. If it's smaller discard the first half
  5. If it's the same return the index
  6. Repeat steps 1-5 until you find the search value
*/

function binarySearch (array, searchValue) {
  if (array.length === 1) {
    if (array[0] === searchValue) return 0;

    return -1;
  }
  let middleIndex = Math.ceil (array.length / 2);

  if (array[middleIndex] === searchValue) {
    return middleIndex;
  } else if (array[middleIndex] < searchValue) {
    let searchArray = array.slice (middleIndex,);
    let deeperSearchReturned = binarySearch(searchArray, searchValue);

    if (deeperSearchReturned === -1) return -1;

    return middleIndex + deeperSearchReturned;
  } else {
    let searchArray = array.slice(0, middleIndex);
    let deeperSearchReturned = binarySearch(searchArray, searchValue);

    if (deeperSearchReturned === -1) return -1;

    return middleIndex - searchArray.length + deeperSearchReturned;
  }

}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log (binarySearch(yellowPages, 'Pizzeria'));
console.log (binarySearch(yellowPages, 'Apple Store'));

console.log (binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));
console.log (binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));
console.log (binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));

console.log (binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));
console.log (binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));