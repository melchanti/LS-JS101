//function to compute the sum of an inputted array
function sum (array) {
	let total = array.reduce ((accumulator, value) => {return accumulator += value}, accumulator = 0);

	console.log (`The sum of the integers in the array is ${total}.`);
}

//function to compute the product of an inputted array
function product (array) {
	let multiple = array.reduce ((accumulator, value) => {return accumulator *= value}, accumulator = 1);

	console.log(`The product of the integers is ${multiple}.`);
}


let rlSync = require ('readline-sync');

// To read the program easier, this function asks the user to input an array and validates that it's an array of numbers
function inputArray () {
	let validArray = true;

	let userArray =[];

	//loop that keeps iterating until the user enters a valid array of integers
	do {
		validArray = true;

		let userNumbers = rlSync.question ('Please enter an array of numbers: ');

		userArray = userNumbers.split(',').map(string => parseInt(string));

		//loops through the entered array to determine if it's in fact an array of integers.
		for (number of userArray){
			if (!Number.isInteger(number)) {
				console.log ("You've entered an invalid array");
				validArray = false;
				break;
			}
		}
	}while (!validArray) 

	return userArray;
}

let userArray = inputArray ();
let choice = rlSync.question ('Enter "s" to compute the sum, or "p" to compute the product. ');

choice === 's' ? sum(userArray): product(userArray);


