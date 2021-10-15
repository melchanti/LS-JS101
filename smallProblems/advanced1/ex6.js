function merge (array1, array2) {
  let merged = [];
  let copyArray1 = [...array1];
  let copyArray2 = [...array2];

  while (copyArray1.length > 0 && copyArray2.length > 0) {
    merged.push (copyArray1[0] <= copyArray2[0] ? copyArray1.shift() : copyArray2.shift());
  }

  merged = merged.concat(copyArray1.length === 0 ? copyArray2 : copyArray1);
  return merged;
}

function mergeSort (array) {
  let middleIndex = Math.ceil (array.length / 2);
  if (array.length === 1) return array;

  let firstArray = array.slice (0, middleIndex);
  let secondArray = array.slice (middleIndex,);

  let sortedArray = merge(mergeSort(firstArray), mergeSort(secondArray));

  return sortedArray;
}

console.log (mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log (mergeSort([5, 3]));                 // [3, 5]
console.log (mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log (mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log (mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]