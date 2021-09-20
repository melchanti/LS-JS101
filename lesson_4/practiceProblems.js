// Practice problem 1
console.log ('Question 1')
console.log ([1, 2, 3].filter (num => 'hi'));

/*
The code above will return [1, 2, 3].
The filter method for array will look at the return value of the callback function
If the return value for an element evaluates to true, it'll place that element in the array.
Otherwise it'll not. Our call back function above ( num => 'hi') will return the value 'hi'
which will always evaluate to true, no matter what the element is. Therefore the filter method will 
return the same array [1, 2, 3].
*/
console.log ('\nQuestion 2');
console.log ([1, 2, 3].map(num => {
  num * num;
}));

/*
[undefined, undefined, undefined]

The map function places the return value of the callback function in the returned array.
The callback function above doesn't have an explicit return statement and it's enclosed in
curly brackets. Which means that it'll return the implicit return value of undefined always.
Therefore the map method will return a 3 element array with values of undefined.
[undefined, undefined, undefined]
*/

console.log ('\nQuestion 3');
console.log ([1, 2, 3].map(num => num * num));

/*
[1, 4, 9]
Map returns a new array that has the same number of elements as the array that the method is called
on with the return value of the callback at each iteration. In this case, because there are no braces
and the function has only one expression the return value returns the value of the element multiplied
by itself. Therefore in this case, the returned array will be
[1, 4, 9]
*/

console.log ('\nQuestion 4');

console.log (['ant', 'bear', 'caterpillar'].pop().length);

/*
11
this is a tricky question, since JS evaluates statements from left to right, let's do the same.
First we have an array of strings that we call the Array.prototype.pop method on. This method returns
the last element of the array and removes it form the array, in this case it's a string with the 
value 'caterpillar'. Now, we are calling the length method on a string, so we are using the 
String.prototype.length method. This method returns the number of character in a string. 
'caterpillar' has 11 characters and hence the length method will return 11. So the overall statement 
will return 11.
*/

console.log ('\nQuestion 5');
console.log ([1, 2, 3].every(num => {
  return num = num * 2;
}));

/* false
The return of the callback function here is using the assignment method (=). The assignment method
assigns the variable on the left to the return value of the expression on the right and returns that 
value. If we look at the elements of the array, they are 1, 2, 3. Therefore the callback will return
2, 4, 6 respectively for each element. Notice that all these values are truthy.Therefore, the 
callback for all the elements of the array will return truthy. The Array.prototype.every method 
returns true if for every element in the array, the callback return value is truthy and false 
otherwise. In this case, the method will return true.
*/

console.log ('\nQuestion 6');
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/*
Array.prototype.fill changes all elements in an array to a static value.

It's a destructive method that takes an array and fills it with its argument. The fill method
also takes two additional optional argument, the start index (if there's no start index, it 
defaults to 0), and the end index (If there's no end index, it defaults to array.length). The method
changes all values starting with the start index (inclusive) to the end index (exclusive) to the static
value, its first argument.

To find out if the method is destructive, print the arr, you'll notice that the value of the arr is now
[1, 1, 1, 1, 1] meaning it's destructive.
*/

console.log ('\nQuestion 7');

console.log (['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
}));

/* [undefined, 'bear']

The callback function will first look at the first element 'ant', check if its length is bigger than 3.
In this case, the length is 3 and hence the condition will faill and it'll skip line 3. Because, the
callback doesn't have an explicit return function outside the if statement, it'll return undefined (will
place undefined in the returned array). After that, it'll look at the second element 'bear' and 
because the length is longer than 3, it'll return 'bear' (will place 'bear' in the returned array).
*/

console.log ('\nQuestion 8');

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintObject = {};

flintstones.forEach ( (value, index) => {
  flintObject[value] = index;
});

console.log (flintObject);

//done

console.log ('\nQuestion 9');

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log (Object.values(ages).reduce((total, age) => total += age, 0));

//done

console.log ('\nQuestion 10');

let minimumAge;

Object.values(ages).forEach((age, index) => {
  if (index === 0) minimumAge = age;
  if (age < minimumAge) minimumAge = age;
});

console.log (minimumAge);

//done

console.log ('\nQuestion 11');

let statement = "The Flintstones Rock";
let letters = {};

statement.split('').forEach (char => {
  if (char === ' ') return;
  if (!letters.hasOwnProperty(char)) letters[char] = 1;
  else {
  letters[char] += 1;}
});

console.log (letters);