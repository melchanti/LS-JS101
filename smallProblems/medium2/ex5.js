function featured (num) {
  let counter = 1;

  let returnedNumber;

  do {
    returnedNumber = counter * 7;

    let stringArray = [];

    if (returnedNumber > num) {
      if ((returnedNumber % 2 === 1 && returnedNumber.toString().split('').every(digit => {
        let found = stringArray.includes(digit);

        stringArray.push (digit);

        return !found;
      }))) break;
    }

    counter += 1;
  } while (returnedNumber <= 9876543201);

  if (returnedNumber > 9876543201) {
    returnedNumber = 'There is no possible number that fulfills those requirements.'
  }

  console.log (returnedNumber);

  if (returnedNumber > 9876543201) {
    returnedNumber = 'There is no possible number that fulfills those requirements.'
  }
  return returnedNumber;
}


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
