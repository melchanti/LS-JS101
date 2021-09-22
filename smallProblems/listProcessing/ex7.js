/*
Algorithm:
1. get an array of the sums at each index
2. Add the sums together
3. return the array
*/

function getSums (array) {
  return array.map ((value, index) => {
    array.slice(0, index).forEach (preValue => value = value + preValue);
    return value;
  })
}
function sumOfSums (originalArray) {
  let sum = getSums(originalArray).reduce ((accum, value) =>accum += value, 0);
  console.log (sum);
  return sum;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35