function oddities (array) {
	return array.filter( num =>
		array.indexOf(num) % 2 === 0
	 );
}

function evenities (array) {
	let evenElements = [];
	for (value of array) {
		if (array.indexOf (value) % 2 !== 0) 
			evenElements.push(value);
	}

	return evenElements;
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evenities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evenities(["abc", "def"])); // logs ['abc']
console.log(evenities([123])); // logs [123]
console.log(evenities([])); // logs []