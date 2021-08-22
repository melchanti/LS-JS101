function even (start, end) {


	if (start%2 === 0) i = start;
	
	else i = start + 1;

	while (i <= end){
		console.log (i);
		i += 2;
	}
}

let rlSync = require ('readline-sync');

let limits = rlSync.question ('Enter your limits separated by a comma: ');

let limitsArray = limits.split(',');

even(parseInt(limitsArray[0]), parseInt(limitsArray[1]));
