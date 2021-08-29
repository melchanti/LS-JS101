/*
Ask the user for the first number.
Ask the user for the second number.
Ask the user for an operation to perform.
Perform the operation on the two numbers.
Print the result to the terminal
*/
const readline = require ('readline-sync');
let messages = require('./calculatorMessages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages.French.welcome);

let another;
let anotherOperation;
do {
  prompt(messages.French.number1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
  	prompt(messages.French.wrongNumber);
  	number1 = readline.question();
  }

  prompt(messages.French.number2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
	  prompt(messages.French.wrongNumber);
	  number2 = readline.question();
  }

  prompt(messages.French.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
	  prompt(messages.French.wrongOperation);
	  operation = readline.question();
  }


  let output;
  switch (operation) {
	  case '1':
	  	output = Number(number1) + Number(number2);
	  	break;
	  case '2':
	  	output = Number(number1) - Number(number2);
	  	break;
	  case '3':
	  	output = Number(number1) * Number(number2);
	  	break;
	  case '4':
	  	output = Number(number1) / Number(number2);
	  	break;
  }

  console.log (`${messages.French.result} ${output}`);

  console.log (messages.French.continue);
  another = readline.question();

  anotherOperation = another[0] === 'Y' || another[0] === 'y';
} while (anotherOperation);

console.log (messages.French.ThankYou);
