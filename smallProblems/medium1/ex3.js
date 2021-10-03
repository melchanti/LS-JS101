/*
Problem:
  Input:
    1 number
  Output:
    1 rotate number
  Rules:
    1- Rotate the number 1 digit to the left
    2- Split the number into the first two digits and the remaining digits
    3- rotate the remaining digits one number to the left
    4- Split the number into the first 3 digits and the remaining digits
    5- rotate the remaining digits one number to the left
    6- Repeat steps 2-5 until there's 1 digit left in the remaining digits

Examples: Given

Data Structures: Represent the number as a string

Algorithm:
  1. Convert the number to a string
  2. Rotate the number 1 digit to the left
  3. Split the rotated number into fixed digits(first two digits) and the digits that need to be rotated
  4. Rotate the remaining digits one digit to the left
  5. Join the fixed and rotated digits
  6. Repeat steps 3-5 adding one digit to the fixed digits until there's 1 digit remaining in the remaining digits
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

  return unchangedString + rotateArray(rotatedString.split('')).join('');
}

function maxRotation (originalNumber) {
  let originalString = originalNumber.toString();

  let rotatedString = originalString.slice(1,) + originalString [0];

  let fixedCharacters = '';


  for (let index = 1; index <= originalString.length - 2; index += 1) {
    fixedCharacters = rotatedString.slice(0,index);

    rotatedString = rotatedString.slice(index,);

    rotatedString = rotateRightmostDigits(rotatedString, rotatedString.length);

    rotatedString = fixedCharacters + rotatedString;

  }

  console.log (Number(rotatedString));

  return Number(rotatedString);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
    