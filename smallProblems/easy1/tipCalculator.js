let rlSync = require ('readline-sync');

let bill = parseInt (rlSync.question ('What is the bill? '));
let tipPercentage = parseInt (rlSync.question ('What is the tip percentage? '));

let tipAmount = bill*(tipPercentage/100);

console.log (`The tip is $ ${tipAmount} \n The total is $ ${tipAmount+bill}`);
