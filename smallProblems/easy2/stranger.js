function greetings (array, object) {
	let name = array.reduce ((accumulator,n) => accumulator + ' ' +n, accumulator = '');

	return `Hello,${name}! Nice to have a ${object.title} ${object.occupation} around.`;
}

console.log (
	greetings(["john", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);