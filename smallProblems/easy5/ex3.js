/* Problem: Take one array and split it in half.
Return one array with two array elements. The first array element has the first half of the original array
the second array element has the second half.
If the original array has an odd length, the first element of the returned array will have one extra element that the second array.

Example: halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Data Structures: Input 1 array
Output 1 nested array

Algorithm:

START

GIVEN one originalArray

SET length = originalArray.length

SET firstArrayEnd = Math.ceil (length/2)

SET firstArray = originalArray.slice(0,firstArrayEnd)

SET secondArray = originalArray.slice(firstArrayEnd,)

PRINT [firstArray, secondArray]

END
*/

function halvsies (originalArray) {
  let firstArrayEnd = Math.ceil (originalArray.length / 2);

  let firstArray = originalArray.slice (0, firstArrayEnd);
  let secondArray = originalArray.slice (firstArrayEnd,);

  console.log ([firstArray, secondArray]);

  return [firstArray, secondArray];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]