/*
Problem:
  Input: A fraction
  Output: Array
  Rules;
    1. A rational number can be represented as the result of the division between two integers
    2. Any rational number can be represented as an egyptian fraction
    3. Egyptian fraction is the sum of a series of distinct unit fractions
    4. Take the rational number and represent it as an egyptian fraction
    5. Use the second number as the numerator and return an array of the denominators
    6. Assume all numbers are rational numbers
Examples: Given

Data Structure: Array
Algorithm:
  1. Divide the numerator by 1 to get first fraction
  2. Compare the sum of the fractions
    a. If the sum of the fractions is less than the rational number, add the fraction to the array
    b. If the sum of the fractions is more than the rational number, skip this number
    c. If the sum of the fraction is equal to the ration number, add the fraction to the array and return it
  3. Repeat steps 1-2, incrementing the denominator of the fraction by 1 at each iteration
*/

let Fraction = require ('fraction.js');

function egyptian (fraction) {
  let rationalNumber = fraction.n;
  let numerator = fraction.d;
  let sum = 0;
  let counter = 1;
  let denominators = [];

  while (sum < rationalNumber) {
    let fraction = numerator / counter;

    let tempSum = sum + fraction;

    if (tempSum > rationalNumber) {
      counter += 1;
      continue;
    }

    if (tempSum <= rationalNumber) denominators.push(counter);

    sum = tempSum;
    counter += 1;

  }
  return denominators;
}

function unegyptian (array) {
  let tempArray = [...array];
  let fraction = 0;
  while (tempArray.length > 0) {
    fraction += 1 / tempArray.shift();
  }

  return fraction;
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3