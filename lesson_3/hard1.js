/*Question 1

Will the following functions return the same results

the second function will return undefined because the return statement needs to have an expression on the same line or at least start on the same line.
Otherwise, JS will add a semicolon directly after the return statement and hence the second function returns undefined
*/

console.log ('\nQuestion 1');

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*Question 2
What does the last line output

It'll output {first : [1, 2]}. On the second line where you assign numArray = object["first"], the value on the property first is a pointer referring
to the array. Therefore, on the second line you are assigning numArray to that pointer. Hence, when you mutate numArray you will mutate the value assigned
to the propery first

*/

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/*Question 3
What will each code below print

A) 
The function isn't mutating the arrays rather, it's reassigning its parameters.
Therefore, the variables outside the function continue pointing to the same arrays that they were pointing to before the function got called.

It should print:
one is: ['one']
two is: ['two']
three is: ['three']

B)
Same as with a, the function messWithVars is not mutating the arrays, rather it's reassigning its parameters.
Therefore, outside the function the values that the variables one, two and three are point to don't change.

It should print:
It should print:
one is: ['one']
two is: ['two']
three is: ['three']

C)
When the function messWithVars is called with the arguments one, two, three. Those arguments have values that point to three different arrays.
Therefore, the parameters of the function one, two, three also have values that point to those same arrays.
The function messWithVars calls Array.prototype.splice on the three arrays that its parameters point to.
In this scenarior the paramters and the variables outside the function hold values that point to the same array.
The function messWithVars mutates the arrays that its parameters and in turn the global variables point to and hence the output will be:

one is: ['two']
two is: ['three']
three is: ['one']
*/

console.log ('\nQuestion 3');
/*console.log ('snippet A');

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
*/
/*console.log ('\nsnippet B');
function messWithVarsB(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVarsB(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
*/
console.log ('\nsnippet C');
function messWithVarsC(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVarsC(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*Question 4
Fix the code below

*/
console.log ('\nQuestion 4');

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
    console.log ('Not 4 componenets');
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      console.log (`Not a valid IP number ${word}`);
      return false;
    }
  }

  return true;
}

console.log (isDotSeparatedIpAddress('10.230.111.4'));