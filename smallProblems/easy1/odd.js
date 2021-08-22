let rlSync = require ('readline-sync');
let limit = rlSync.question ('Specify the upper limit for the odd numbers: ');

let counter = 1;
while (counter <= limit) {
	console.log (counter);
	counter += 2;
}

