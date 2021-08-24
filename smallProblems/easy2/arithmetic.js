let rlSync = require ('readline-sync');

function add (num1, num2) {
	console.log (`${num1} + ${num2} = ${num1 + num2}`);
}

function subtract (num1, num2) {
	console.log (`${num1} - ${num2} = ${num1 - num2}`);
}

function multiply (num1, num2) {
	console.log (`${num1} * ${num2} = ${num1 * num2}`);
}

function divide (num1, num2) {
	console.log (`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
}

function remainder (num1, num2) {
	console.log (`${num1} % ${num2} = ${num1 % num2}`);
}

function power (num1, num2) {
	console.log (`${num1} ** ${num2} = ${num1 ** num2}`);
}

function input () {
	console.log ('Enter the first number:');
	let num1 = Number(rlSync.question());

	console.log ('Enter the second number:');
	let num2 = Number(rlSync.question());

	let array = [num1, num2];
	return array;
}

let userArray = input();

add (userArray[0], userArray[1]);
subtract (userArray[0], userArray[1]);
multiply (userArray[0], userArray[1]);
divide (userArray[0], userArray[1]);
remainder (userArray[0], userArray[1]);
power (userArray[0], userArray[1]);



