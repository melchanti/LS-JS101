/* QUESTION 1
The code below shouldn't raise an error.
It would create 4 additional entries in the array.
The array would look like the below:
[1, 2, 3, <3 empty items>, 5]
When the program call numbers[4];
It will return undefined.
*/

console.log('Question 1');
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log (numbers[4]);  // what will this line return?
console.log(numbers);

/* QUESTION 2
To determine if the string ends with an exclamation mark(!)
check the last character in the string as to whether it equals (!)
*/
console.log ('\nQuestion 2');
//let str1 = "Come over here!"; // true
//let str2 = "What's up, Doc?"; // false

//console.log (str1[str1.length - 1] === '!');
//console.log (str2[str1.length - 1] === '!');

/* Question 3
Determine whether the followin object of people and their age contains an entry for 'Spot'
*/
console.log ('\nQuestion 3');

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log (ages.hasOwnProperty('Spot') ? "exists" : "Doesn't exist");

/*Question 4
Create a new string that has all lowercase letters except for the first character, which should be capitalized
*/
console.log ('\nQuestion 4');
let munstersDescription = "the Munsters are CREEPY and Spooky.";

let munstersDescriptionLowerCase = munstersDescription[0].toUpperCase() + munstersDescription.slice(1,).toLowerCase();

console.log (munstersDescriptionLowerCase);

/* Question 5

The following code will output true for the first line because
the instrict equality operator will coerce the boolean into a number and then coerce the string into a number
false == 0 and '0' == 0. Therefore it'll output true.
The strict equality operator will output false
*/

console.log('\nQuestion 5');
console.log (false == '0');
console.log (false === '0');

/* Question 6
Add two entries to an object
*/
console.log('\nQuestion 6');

let additionalAges = { Marilyn: 22, Spot: 237};

Object.assign(ages, additionalAges);

console.log (ages);

/* Question 7
Determine if Dino exists in the following string
*/
console.log('\nQuestion 7');

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log (str1.includes('Dino'));
console.log (str2.includes('Dino'));

/*Question 8/9
Add Dino and Hoppy to the following array
*/
console.log ('\nQuestion 8');
let flinstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flinstones.push('Dino', 'Hoppy');
console.log(flinstones);

/*Question 10
Return a new version of the following sentence that ends before the word house
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.substring(0,advice.indexOf('house'));

console.log(newAdvice);