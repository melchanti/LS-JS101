function reverseNumber (originalNumber) {
  let finalNumber = 0;

  while (originalNumber) {
    finalNumber = (finalNumber * 10) + originalNumber % 10;
    originalNumber = parseInt (originalNumber / 10);
  }

  return finalNumber;
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1