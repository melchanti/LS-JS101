function multiply (num1, num2) {
	return num1*num2;
}

let power = (num, n) => {
	let total = num;
	for (let i = 1; i < n; i++) {
		total = multiply(num, total);
	}

	return total;
};

console.log (multiply(5, 3) === 15);

//console.log (square(5) === 25);

//console.log (square(-8) === 64);

console.log (power (2,4));
console.log (power(3,3));