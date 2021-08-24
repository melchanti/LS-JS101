let rlSync = require ('readline-sync');

let bill = parseFloat (rlSync.question ('What is the bill? '));
let tipPercentage = parseFloat (rlSync.question ('What is the tip percentage? '));

let tipAmount = bill*(tipPercentage/100);

console.log (`The tip is $ ${tipAmount.toFixed(2)}. \n The total is $ ${(tipAmount+bill).toFixed(2)}`);
