function multisum(number) {
	let multiplesArray = [];

	for (let i = 0; i <= number; i++){
		if ( (i % 3 === 0) || (i % 5 === 0)) {
			multiplesArray.push (i);
		}
	}

	let total = multiplesArray.reduce ( (accumulator, num) => accumulator += num, accumulator = 0);

	console.log (total);
	return total;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168