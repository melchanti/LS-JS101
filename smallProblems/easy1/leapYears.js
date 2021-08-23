function isLeapYear (year) {
	if (year % 400 === 0) {
		console.log (true);
		return true;
	}
	else if (year % 100 === 0) {
		console.log (false);
		return false;
	}

	else if (year % 4 === 0) {
		console.log (true);
		return true;
	}

	console.log (false);
	return false;
}

function isLeapYear2 (year) {

	if (year < 1752) {
		console.log (year % 4 === 0);
		return (year % 4) === 0;
	}

	if (year % 4 !== 0) {
		console.log (false)
		return false;
	}

	else if (year % 100 !== 0) {
		console.log (true);
		return true;
	}

	else {
		console.log (year % 400 === 0);
		return year % 400 === 0;
	}
}

/*
isLeapYear2(2016);      // true
isLeapYear2(2015);      // false
isLeapYear2(2100);      // false
isLeapYear2(2400);      // true
isLeapYear2(240000);    // true
isLeapYear2(240001);    // false
isLeapYear2(2000);      // true
isLeapYear2(1900);      // false
isLeapYear2(1752);      // true
isLeapYear2(1700);      // false
isLeapYear2(1);         // false
isLeapYear2(100);       // false
isLeapYear2(400);       // true
*/

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true