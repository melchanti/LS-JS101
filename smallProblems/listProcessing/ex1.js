function sum (originalNumber) {
  console.log (originalNumber.toString().split('').reduce ((sum, digit) => sum += Number(digit), 0));
}

sum (23);
sum (496);
sum (123456789);