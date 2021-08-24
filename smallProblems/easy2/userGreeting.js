let rlSync = require ('readline-sync');

function greeting (name) {
	if (name[name.length-1] === '!'){
		return `HELLO ${name.slice(0,name.length-1).toUpperCase()}. WHY ARE WE SCREAMING?`;
	}
	else
		return `Hello ${name}.`;
}

console.log ("What is your name? ")
let userName = rlSync.question();

console.log (greeting(userName));