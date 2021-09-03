console.clear();
const readline = require('readline-sync');
const VALID_CHOICES = ['rock(r)', 'paper(p)', 'scissors(sc)', 'lizard(l)', 'spock(sp)'];
const SCISSORS_WINNER = /paper\(p\)|lizard\(l\)/;
const PAPER_WINNER = /rock\(r\)|spock\(sp\)/;
const ROCK_WINNER = /lizard\(l\)|scissors\(sc\)/;
const LIZARD_WINNER = /spock\(sp\)|paper\(p\)/;
const SPOCK_WINNER = /scissors\(sc\)|rock\(r\)/;

const SCISSORS_LOSER = /spock\(sp\)|rock\(r\)/;
const PAPER_LOSER = /scissors\(sc\)|lizard\(l\)/;
const ROCK_LOSER = /paper\(p\)|spock\(sp\)/;
const LIZARD_LOSER = /rock\(r\)|scissors\(sc\)/;
const SPOCK_LOSER = /lizard\(l\)|paper\(p\)/;

function prompt(message) {
  console.log(`=> ${message}`);
}
//function to get input from user
function getUserChoice() {
  let choice = readline.question(`=> Choose one: ${VALID_CHOICES.join(', ')}\n`);

  while (!choice.match(/r|p|sc|l|sp/)) {
    choice = readline.question("=> That's not a valid choice, choose another");
  }

  switch (choice) {
    case 'r':
      return 'rock(r)';
    case 'p':
      return 'paper(p)';
    case 'sc':
      return 'scissors(sc)';
    case 'l':
      return 'lizard(l)';
    case 'sp':
      return 'spock(sp)';
  }
}

//function to get the computer input
function getComputerChoice() {
  let randomIndex = Math.floor (Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

//function that returns the winner of a single
//set to the console after comparing the inputs
function getSetWinner(userChoice, computerChoice) {
  prompt (`You chose ${userChoice}, computer chose ${computerChoice}`);

  if ((userChoice === 'scissors(sc)' && computerChoice.match(SCISSORS_WINNER)) ||
      (userChoice === 'paper(p)' && computerChoice.match(PAPER_WINNER)) ||
      (userChoice === 'rock(r)' && computerChoice.match(ROCK_WINNER)) ||
      (userChoice === 'lizard(l)' && computerChoice.match(LIZARD_WINNER)) ||
      (userChoice === 'spock(sp)' && computerChoice.match(SPOCK_WINNER))) {
    prompt('You win the set!');
    return 'user';
  } else if ((userChoice === 'scissors(sc)' && computerChoice.match(SCISSORS_LOSER)) ||
      (userChoice === 'paper(p)' && computerChoice.match(PAPER_LOSER)) ||
      (userChoice === 'rock(r)' && computerChoice.match(ROCK_LOSER)) ||
      (userChoice === 'lizard(l)' && computerChoice.match(LIZARD_LOSER)) ||
      (userChoice === 'spock(sp)' && computerChoice.match(SPOCK_LOSER))) {
    prompt('Computer wins the set.');
    return 'computer';
  } else {
    prompt("It's a tie");
  }
}

//function that displays the winner of the game to the console
function displayGameWinner () {
  let userWins = 0;
  let computerWins = 0;
  while (userWins < 3 && computerWins < 3) {

    readline.question('=> Click enter to continue');
    console.clear();
    let setWinner = getSetWinner(getUserChoice(), getComputerChoice());

    if (setWinner === 'user') {
      userWins += 1;
    } else if (setWinner === 'computer') {
      computerWins += 1;
    }

    prompt(`The score is user: ${userWins} to computer: ${computerWins} \n`);
  }

  if (userWins === 3) {
    prompt('You win!');
  } else if (computerWins === 3) {
    prompt('Computer wins');
  }
}
//function that asks the user if they would like to play again
function playAgain() {
  prompt('Do you want to play again (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "no".');
    answer = readline.question().toLowerCase();
  }

  console.clear();
  return (answer === 'y' || answer === 'yes');
}

prompt('Welcome to the ultimate game of ROCK, PAPER, SCISSORS!');

//A do/while loop that loops until the user enters an answer other than yes
do {

  displayGameWinner();

} while (playAgain());

