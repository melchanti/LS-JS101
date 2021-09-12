/*Question 1
Output 'The flintsones Rock! 10 times with each line indented 1 space
*/

console.log (`\nQuestion 1`);
let statement = 'The flintstones Rock!'
for (let i = 1; i <= 10; i++) {
  console.log (statement.padStart(statement.length + i, ' '));
}

/*Question 2
Swap the letters of the strings from case to case
*/

console.log (`\nQuestion 2`);

let munstersDescription = "The Munsters are creepy and spooky.";

let changedCase = munstersDescription.split('').map(value => {
  if (value.toLowerCase() === value) {
    return value.toUpperCase();
  }
  return value.toLowerCase();
}).join('');

console.log (changedCase);

/*Question 3
rewrite this function to account for 0 or -ve's.
*/
console.log ('\nQuestion 3');

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors1(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

let number = 100;

console.log (factors1(number));
console.log (factors(number));

/*Question 4
Is there a difference between the two below
*/
console.log ('\nQuestion 4');
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let array = [1,2,3,4,5];
let array1 = [1,2,3,4,5];
addToRollingBuffer1(array,7,8);
addToRollingBuffer2(array1,7,8);

console.log (`Array = ${array} and array1 = ${array1}`);

/*Question 5
What will the following code output

0.9
true
*/

console.log ('\nQuestion 5');
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

/*Question 7
What will the followin output
34
*/

console.log ('\nQuestion 7');

let answer = 42;

function messWithIt(someNumber) {

  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/*Question 8
Did the function messWithDemographics messed with the family's data?

Yes, it did because when munsters is passed into the messWithDemographics function it was passed as a pointer to the object.
Inside the messWithDemogrpahics, when the forEach callBack function was called with the familyMember as an argument,
the familyMember was also passed as a pointer and hence changing any properties of familyMember it changes the objects that those pointers refer to.

*/
console.log('\nQuestion 8');
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);

/*Question 9

What will the following function output? 'Paper'

*/
console.log ('\nQuestion 9');

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
