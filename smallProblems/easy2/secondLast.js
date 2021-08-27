function penultimate (string) {
	let array = string.split(' ');

	return array[array.length-2];
}

function middle (string) {

	//empty string scenario
	if (string.length === 0) 
		return "you didn't enter a string"

	let array = string.split (' ');
	
	let middleIndex = parseInt((array.length / 2));

	// if the length is an even number, we return the two middle words
	if (array.length % 2 === 0){
		return array[(middleIndex-1)] + ' ' + array[middleIndex];
	}

	else {
		return array[middleIndex-1];
	}
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(penultimate('How are you my friend, I miss you so much, where have you been'));

console.log (middle('Hi how'));

console.log (middle(''));

console.log (middle ('Hi how are'));

console.log (middle ('Hi how are you?'));