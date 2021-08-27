function stringToSignedInteger(string) {
	let sign = '+';

	const DIGITS = {
		0:0,
		1:1,
		2:2,
		3:3,
		4:4,
		5:5,
		6:6,
		7:7,
		8:8,
		9:9
	}

	let arrayOfNums = string.split('');

	if (arrayOfNums[0] === '+')
		arrayOfNums.shift();
	else if (arrayOfNums[0] === '-'){
		arrayOfNums.shift();
		sign = '-';
	}
	let arrayOfDigits = arrayOfNums.map (num => DIGITS[num]);

	let value = 0;

	for (num of arrayOfDigits) {
		value = value*10 + num;
	}

	if (sign === '-')
		return value * -1;

	return value;
}

function hexadecimalToInteger(string) {

	const DIGITS = {
		0:0,
		1:1,
		2:2,
		3:3,
		4:4,
		5:5,
		6:6,
		7:7,
		8:8,
		9:9,
		A:10,
		a:10,
		B:11,
		b:11,
		C:12,
		c:12,
		D:13,
		d:13,
		E:14,
		e:14,
		F:15,
		f:15
	}

	let arrayOfDigits = string.split('').map (num => DIGITS[num]);

	let value = 0;

	for (num of arrayOfDigits) {
		value = value*16 + num;
	}

	return value;
}

//console.log(stringToInteger("4321") === 4321); // logs true
//console.log(stringToInteger("570") === 570); // logs true

console.log (hexadecimalToInteger('4D9f'));

console.log ('');

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true