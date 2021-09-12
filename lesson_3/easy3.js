/*Question 1
write three ways to remove all the elements from the array
*/
console.log(`\nQuestion 1`);

let numbers = [1, 2, 3, 4];
numbers =[];
console.log (numbers);

numbers = [1, 2, 3, 4];
let length = numbers.length;
for (let i = 0; i < length; i++){
  numbers.pop();
}
console.log (numbers);

numbers = [1, 2, 3, 4];
for (let i = 0; i < length; i++) {
  numbers.shift();
}
console.log (numbers);

/*Question 2
The following code will output 1, 2, 3, 4, 5
*/
console.log(`\nQuestion 2`);
console.log ([1, 2, 3] + [4, 5]);

/*Question 3
The following code will output hello there
*/
console.log (`\nQuestion 3`);
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/*Question 4
[{ first: "42" }, { second: "value2" }, 3, 4, 5]

Since we used the method Array.prototype.slice(), we created a shallow copy of the array 'arr1';
meaning that we only created copies of the outermost layer values in the array.

Notice that the first two instances of the array are objects and hence they are not stored in the array.
Rather a pointer is stored in arr1 that points to those objects in memory. Therefore, when .slice() is used on the array (a shallow copy)
a copy of those pointers is created but not another instance of the object. Hence, arr1 and arr2 have a pointer at their indeces
0 and 1 that point to the same objects.

When in line 54, we change a the value of the first property of the object {first: "value1"} to {first: 42} and both arr1 and arr2 now point to the same object
which is {first: 42}
*/
console.log(`\nQuestion 4`);
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*Question 5
rewrite the following function with one return statement without false or true
*/
console.log(`\nQuestion 5`);

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid1(color) {
  return color === "blue" || color === "green";
}

function isColorValid2(color) {
  return !(color !== "blue" && color !== "green");
}

let color = 'red';
console.log (isColorValid(color) === isColorValid1(color) && isColorValid(color) === isColorValid2(color));