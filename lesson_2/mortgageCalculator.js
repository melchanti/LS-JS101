let rlSync = require('readline-sync');

function prompt (message) {
  console.log (`=> ${message}`);
}

function getLoanAmount() {
  prompt ('Enter the loan amount: ');
  let loanAmountFunction = rlSync.question();

  while (loanAmountFunction < 0 || Number.isNaN(Number(loanAmountFunction)) || loanAmountFunction.trimStart() === '') {
    prompt ("You've entered an invalid loan amount: ");
    loanAmountFunction = rlSync.question();
  }

  return Number(loanAmountFunction);
}

function getMonthlyInterest() {
  prompt ('Enter the APR in ercentage: ');
  let APR = rlSync.question();

  while (APR > 100 || APR < 0 || Number.isNaN(Number(APR)) || APR.trimStart() === '') {
    prompt ("You've entered an invalid APR: ");
    APR = rlSync.question();
  }

  return Number(APR) / 12 / 100;

}

function getMonthlyLength() {
  prompt ('Enter the length of your loan in years: ');
  let lengthInYears = rlSync.question();

  while (lengthInYears < 0 || Number.isNaN(Number(lengthInYears)) || lengthInYears.trimStart() === '' || (((lengthInYears * 12) % 12) !== 0)) {
    prompt ("You've entered an invalid number of years: ");
    lengthInYears = rlSync.question();
  }

  return Number(lengthInYears) * 12;
}

function calculateMortgage(amount, interest, months) {
  if (amount === 0) return 0;
  else if (interest === 0) return amount / months;
  else if (months === 0) return amount;

  return amount * (interest / (1 - Math.pow((1 + interest), (-months))));
}

let again;

do {
  let loanAmount = getLoanAmount();

  let monthlyInterest = getMonthlyInterest();

  let monthlyLength = getMonthlyLength();

  let monthlyPayment = calculateMortgage(loanAmount, monthlyInterest, monthlyLength);

  console.log (`Your monthly payment will be $${monthlyPayment.toFixed(2)} paid over ${monthlyLength} months.`);

  prompt ('would you like to perform another calculator: ');
  again = rlSync.question();

} while (again[0].toLowerCase() === 'y');

console.log ('Thank you');