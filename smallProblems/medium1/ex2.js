/*

Problem:
  Input: A number, an integer that represents 
  the index of the integer from the back to rotate
  Output: The same number with the digits to the right of 
  the count moved before the index of the count
  Rules: 1. Rotate the last count digits of the original number
         2. If the count is 1, don't rotate any digits
         2. If the count is the same length of the digits, return the leftmost digit on the right
         3. Leave the first digits in the same order
         4. Join the first digits with the last count rotated digits, and return it as a number

Examples: Given

Data Structures/Algorithm: String
        Covert the number into a string
        separate the string into the rotated integers and the non-rotated integers
        Use the rotate function from the last ex to rotate the rotated digits
        Append the non-rotated digits to the rotated digits
        return the number representation of the string

*/
function rotateArray (arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;
  let newArr = [...arr];

  newArr.push (newArr.shift());

  return newArr;
}

function rotateRightmostDigits (originalNumber, count) {
  let stringOriginalNumber = originalNumber.toString();

  let rotatedString = stringOriginalNumber.slice(stringOriginalNumber.length - count,);

  let unchangedString = stringOriginalNumber.slice (0, stringOriginalNumber.length - count);

  console.log (unchangedString + rotateArray(rotatedString.split('')).join(''));

  return Number(unchangedString + rotateArray(rotatedString.split('')).join(''));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917