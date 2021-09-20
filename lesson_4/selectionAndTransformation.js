/*function selectFruit (produce) {
  let selectedValue = {};
  for (key in produce) {
    if (produce[key] === 'Fruit') selectedValue[key] = 'Fruit';
  }

  return selectedValue;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log (selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

console.log (produce);*/

/*function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] = numbers[counter] * 2;
    counter += 1;
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log (doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log (myNumbers);                // => [1, 4, 3, 7, 2, 6]
*/

/*function doubleOddIndices (numbers) {
  let doubleNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    if (counter % 2 !== 0) {
      doubleNums.push (numbers[counter] * 2);
    } else {
      doubleNums.push (numbers[counter]);
    }

    counter += 1;
  }

  return doubleNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log (doubleOddIndices(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log (myNumbers);                // => [1, 4, 3, 7, 2, 6]*/

function multiply(numbers, multiple) {
  let multipleNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    multipleNums.push (numbers[counter] * multiple);
    counter += 1;
  }

  return multipleNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log (multiply(myNumbers, 10));
console.log (myNumbers);