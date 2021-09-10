let readline = require ('readline-sync');

function prompt (text) {
  console.log (`=> ${text}`);
}

function suffix (number) {

  let suffix = 'th';
  if ((number % 100) === 11 || (number % 100) === 12 || (number % 100) === 13) {
    return suffix;
  }

  switch (number % 10) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
  }

  return suffix;
}

function getNumbers(total) {
  let array = [];

  for (let index = 1; index <= total; index++) {
    if (index === total) {
      prompt('Enter the last number');
      array.push (readline.question());
      continue;
    }

    prompt (`Enter the ${index}${suffix(index)} number: `);
    array.push(readline.question());
  }

  return array;
}

function searchLast (array) {
  let last = array.pop();
  let found = false;
  if (array.includes (last)) found = true;

  return found;

}

function largerThan (array, num) {
  return array.some (value => value > num);
}

let numbersArray = getNumbers(6);
let last = numbersArray [numbersArray.length - 1];
if (searchLast (numbersArray)) {
  prompt (`The number ${last} appears in ${numbersArray.join(',')}.`);
} else {
  prompt (`The number ${last} does not appear in ${numbersArray.join(',')}.`);
}

if (largerThan (numbersArray, 25)) {
  prompt (`Found a number larger than 25 in ${numbersArray.join(',')}.`);
} else {
  prompt (`Didn't find a number larger than 25 in ${numbersArray.join(',')}.`);
}