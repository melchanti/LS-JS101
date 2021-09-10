function century (year) {
  let century = 0;
  let letter;

  if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = Math.ceil(year / 100);
  }

  let centuryFirstDigit = String(century)[String(century).length - 1];
  let centurySecondDigit = String(century)[String(century).length - 2];

  if (centurySecondDigit === '1'){
    letter = 'th';
    console.log (century + letter);
    return (century + letter);
  }

  switch (centuryFirstDigit) {
    case '1':
      letter = 'st'
      break;
    case '2':
      letter = 'nd';
      break;
    case '3':
      letter = 'rd';
      break;
    default:
      letter = 'th';
      break;
  }

  console.log (century + letter);
  return (century + letter);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"