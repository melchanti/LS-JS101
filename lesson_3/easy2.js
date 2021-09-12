/* Question 1
Replace every occurrence of the word important with urgent
*/
console.log('Question 1');
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replace(/important/g, 'urgent');

console.log(newAdvice);

/*Question 2
Use Array.prototype.reverse and Array.prototype.sort of reversing the array without mutating the original array
*/
console.log ('\nQuestion 2');

/*let numbers = [1, 2, 3, 4, 5];
let numbers1 = [];
numbers.forEach ( (num, index) => {
  numbers1[index] = numbers[numbers.length-1-index];
});
//numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers1= numbers.slice(0,).reverse();
//numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers1= [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/
/*Question 3
Determine if a number is in an array
*/
console.log ('\nQuestion 3');

/*let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log (numbers.includes(number1));
console.log (numbers.includes(number2));
*/
/*Question 4
Add strings in two different ways
*/

console.log ('\nQuestion 4');
let famousWords = "seven years ago...";
let completeWords = "Four score and ";
console.log (completeWords + famousWords);
console.log(completeWords.concat(famousWords));

/*Question 5
Mutate an array by removing index 2
*/

let arrayNumbers = [1, 2, 3, 4, 5];

arrayNumbers.splice(2,1);
console.log(arrayNumbers);

/*Question 6
Create one array from nested arrays
*/

console.log ('\nQuestion 6');
/*let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newFlintstones = flintstones.reduce ((acc, value) => {

  return acc.concat(value);


}, []);

console.log (newFlintstones);*/

/*Question 7
Create an array from key-value pair of an object
*/
console.log ('\nQuestion 7');

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let childArray = Object.entries(flintstones);
childArray = [].concat(...childArray);

console.log (childArray.slice(childArray.indexOf('Barney'), childArray.indexOf('Barney') + 2));

/*Question 8
check if an object is an array
*/

console.log ('\nQuestion 8');
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log (Array.isArray(numbers));
console.log (Array.isArray(table));

/*Question 9
Center title
*/
console.log ('\nQuestion 9');
let title = "Flintstone Family Members";
let spaceLength = (40 - title.length) / 2;

console.log (`${' '.repeat(spaceLength)}${title}${' '.repeat(spaceLength)}`);
console.log(title.padStart(spaceLength + title.length));

/*Question 10
counter letter appearance
*/
console.log (`\nQuestion 10`);
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go."

console.log (statement1.replace(/[^t]/g,'').length);
console.log(statement2.replace(/[^t]/g,'').length)