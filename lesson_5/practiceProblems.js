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
*/
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