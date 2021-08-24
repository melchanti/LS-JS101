function multiply (num1, num2) {
	return num1*num2;
}

let square = (num) => multiply(num, num);

console.log (multiply(5, 3) === 15);

console.log (square(5) === 25);

console.log (square(-8) === 64);