/*
Problem:
  Input: 3 numbers
  Output: String
  Rules:
    1. Determine if a triangle is valid
      Either 1 side is 0 or,
      the two shortes sides are equal to or less than the leongest side
    2. Determine what classification is the triangle:
      Equilateral: All three sides are equal length
      Isoceles: Two sides are of equal length
      Scalene: All three sides are of different lengths
Examples: Given
Data Structures: Use numbers
Algorithm:
  1. Determine if any of the numbers is less than or equal to 0, return 'invalid' if that's the case
  2. Determine if all sides are equal, return equilateral if that's the case
  5. Determine if the sum of any two sides is shorter than the third, return 'invalid' if that's the case
  6. Determine if two sides are equal, return 'Isoceles' if that's the case
  7. Return Scalene if all the above fail
*/

function triangle(side1, side2, side3) {
  if (side1 === 0 || side2 === 0 || side3 === 0) return 'invalid';

  if (side1 === side2 && side2 === side3) return 'equilateral';

  if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) return 'invalid';
  
  if ((side1 === side2) || (side1 === side3) || (side2 === side3)) return 'isosceles';

  return 'scalene';
}

console.log (triangle(3, 3, 3));        // "equilateral"
console.log (triangle(3, 3, 1.5));      // "isosceles"
console.log (triangle(3, 4, 5));        // "scalene"
console.log (triangle(0, 3, 3));        // "invalid"
console.log (triangle(3, 1, 1));        // "invalid"