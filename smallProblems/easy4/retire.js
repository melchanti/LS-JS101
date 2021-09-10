let readline = require ('readline-sync');

function prompt (text) {
  console.log (`=> ${text}`);
}

function getUserAge () {
  prompt (`What is your age? `);
  return readline.question ();
}

function getUserRetirementAge() {
  prompt (`At what age would you like to retire? `);
  return readline.question ();
}

function displayYear (age, retirementAge) {
  let remainingYears = retirementAge - age;

  let date = Date();
  let currentYear = new Date().getFullYear();
  let retirementYear = currentYear + remainingYears

  prompt (`It's ${currentYear}. You will retire in ${retirementYear}`);
  prompt (`You have only ${remainingYears} years of work to go!`)
}

displayYear (getUserAge(), getUserRetirementAge());