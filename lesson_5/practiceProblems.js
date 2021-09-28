/*console.log ('Question 1');

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => b - a);

console.log (arr);

console.log ('\nQuestion 2');

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number (b.published));

console.log (books);

console.log ('\nQuestion 3');

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

console.log (arr1[2][1][3]);
console.log (arr2[1].third[0]);
console.log (arr3[2].third[0][0]);
console.log (obj1.b[1]);
console.log(Object.keys(obj2.third)[0]);

console.log ('\nQuestion 4');

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;

arr2[2] = 4;

obj1.first[2][0] = 4;

obj2.a.a[2] = 4;

console.log (arr1 + '\n' + arr2 + '\n' + Object.entries(obj1) + '\n' + Object.entries(obj2));

//Print the total age of male
console.log ('\nQuestion 5');

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log (Object.keys(munsters).reduce((accum, key) => {
  if (munsters[key].gender === 'male'){
    return accum + munsters[key].age;
  }

  return accum;
}, 0));

//Print the descriptions
console.log ('\nQuestion 6');

Object.keys(munsters).forEach(key => {
  let name = key;
  let age = munsters[key].age;
  let gender = munsters[key].gender;
  console.log (`${name} is a ${age}-years-old ${gender}.`);
});

//Print the values
console.log ('\nQuestion 8');

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach (value => {
  let vowels = value.reduce((accum, string) => {
    accum.push (string.split('').reduce((accum, char) => {
      return (char.match(/[aeiou]/i))? accum + char: accum;
    }, ''));
    return accum;
  }, [])

  console.log (...vowels);
})

//Sort arrays

console.log ('\nQuestion 9');
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log (arr.map(array => {
  if (typeof(array[0]) === 'number'){
    return [...array].sort((a, b) => Number(a) - Number(b));
  } else {
    return [...array].sort();
  }
}));

console.log(arr);

console.log ('\nQuestion 10');
console.log (arr.map(array => {
  if (typeof(array[0]) === 'number'){
    return [...array].sort((a, b) => Number(b) - Number(a));
  } else {
    return [...array].sort((a, b) => {
      if (a > b){
        return -1;
      } else {
        return 1;
      }
    });
  }
}));

console.log(arr);

console.log('\nQuestion 11');

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let copyArr = arr.map(obj => {
  let newObj = Object.assign({}, obj);

  Object.keys(newObj).forEach(key => newObj[key] += 1);
  return newObj;
});

console.log (arr);
console.log (copyArr);

console.log ('\nQuestion 12');

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(array => {
  return array.filter (num => num % 3 === 0);
});

console.log (arr);
console.log (newArr);

console.log ('\nQuestion 13');

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = [...arr].sort ((a, b) => {
  let aSumOdd = a.filter(num => num % 2 !== 0).reduce ((accum, num) => {
    return accum + num;
  }, 0);
  let bSumOdd = b.filter(num => num % 2 !== 0).reduce ((accum, num) => {
    return accum + num;
  }, 0);

  return aSumOdd - bSumOdd;
});

console.log (arr);
console.log (newArr);

console.log ('\nQuestion 14');

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newObj = Object.values(obj).map (value => {
  if (value.type === 'fruit') {
    return value.colors.map (color => color[0].toUpperCase() + color.slice(1));
  }

  return value.size.toUpperCase();
});

console.log (obj);
console.log (newObj);

console.log ('\nQuestion 15');

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter (obj => {
  return Object.values(obj).every (array => {
    return array.every (num => num % 2 === 0);
  });
});

console.log (arr);
console.log (newArr);

console.log ('\nQuestion 16');
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let obj = {};

arr.forEach (nestedArray => {
  obj[nestedArray[0]] = nestedArray[1];
});

console.log (obj);
*/

/* Question 17
Problem: 1- Return a UUID string
2- No Arguments
3- UUID string has letters that could be 0-9 or a-f
4- 8-4-4-4-12 pattern

Examples: Given

Data Structures: Array that maps 0-16 to the letters in UUID

Algorithm: 1. Randomly generate an integer between 0-16
2. Create a array that is used to map the random number to a letter
3. Repeat for 32 letters
4. Concatenate the 32 letters in a UUID format

*/

function UUID () {
  let dictionary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  let UUID = '';

  for (let index = 0; index < 32; index += 1) {
    UUID = UUID + dictionary[randomNumber()];
  }

  console.log (UUID + ' ' + UUID.length);
  UUID = UUID.slice (0,8) + '-' + UUID.slice (8, 12) + '-' + UUID.slice (12, 16) + '-' +
        UUID.slice(16, 20) + '-' + UUID.slice (20);
  
  return UUID;

}

function randomNumber () {
  return Math.floor (Math.random() * 16);
}

console.log (UUID());