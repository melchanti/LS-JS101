console.clear();
const readline = require('readline-sync');
const VALID_CHOICES = {
  rock: { shorthand: 'r', beats: ['lizard','scissors'] },
  paper: { shorthand: 'p', beats: ['rock', 'spock'] },
  scissors: { shorthand: 'sc', beats: ['paper', 'lizard'] },
  lizard: { shorthand: 'l', beats: ['spock', 'paper'] },
  spock: { shorthand: 'sp', beats: ['scissors', 'rock'] },
};
const VALID_YES_OR_NO = ['yes', 'y', 'no', 'n'];
const MAX_SCORE = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function validateUserChoice (choice) {
  let choices = Object.values(VALID_CHOICES).reduce ( (acc, value) => {
    acc.push (value.shorthand, value.beats[0], value.beats[1]);
    return acc;
  }, []);

  return choices.includes(choice);
}

function mapUserChoice (choice) {
  switch (choice[0]) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 'l':
      return 'lizard';
  }

  switch (choice.slice(0,2)) {
    case 'sc':
      return 'scissors';
    case 'sp':
      return 'spock';
    default:
      return 'wrong';
  }
}

function getUserChoice() {
  let choice = readline.question(`=> Choose one: ${Object.keys(VALID_CHOICES).join(', ')}\n`).toLowerCase();

  while (!validateUserChoice (choice)) {
    prompt ("You've entered an invalid choice, try again");
    choice = readline.question().toLowerCase();
  }

  return mapUserChoice(choice);
}

function getComputerChoice() {
  let randomIndex = Math.floor (Math.random()
                    * Object.keys(VALID_CHOICES).length);
  return Object.keys(VALID_CHOICES)[randomIndex];
}

function playerWins (userChoice, computerChoice) {
  return (userChoice === 'scissors' && VALID_CHOICES.scissors.beats.includes(computerChoice)) ||
  (userChoice === 'paper' && VALID_CHOICES.paper.beats.includes(computerChoice)) ||
  (userChoice === 'rock' && VALID_CHOICES.rock.beats.includes(computerChoice)) ||
  (userChoice === 'lizard' && VALID_CHOICES.lizard.beats.includes(computerChoice)) ||
  (userChoice === 'spock' && VALID_CHOICES.spock.beats.includes(computerChoice));
}


function getRoundWinner(userChoice, computerChoice) {
  prompt (`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (playerWins(userChoice, computerChoice)) {
    prompt('You win the round!\n');
    return 'user';
  } else if (userChoice === computerChoice) {
    prompt("It's a tie\n");
    return 'neither wins';
  } else {
    prompt('Computer wins the round.\n');
    return 'computer';
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)');
  let answer = readline.question().toLowerCase();

  while (!VALID_YES_OR_NO.includes(answer)) {
    prompt('Please enter "yes(y)" or "no(n)".');
    answer = readline.question().toLowerCase();
  }

  console.clear();
  return (answer[0] === 'y');
}

function getReviewRulesChoice () {

  prompt ('Would you like to review the rules?');
  let viewRulesChoice = readline.question().toLowerCase();
  while (!VALID_YES_OR_NO.includes (viewRulesChoice)) {
    prompt ("You've entered an invalid choice, try again");
    viewRulesChoice = readline.question().toLowerCase();
  }

  return viewRulesChoice;
}

function displayRules () {
  prompt (`In order to win the game, you need to win ${MAX_SCORE} rounds against the computer.`);
  prompt (`Each round will give you ${Object.keys(VALID_CHOICES).length} choices; they are ${Object.keys(VALID_CHOICES).join(', ')}`);
  prompt (`The rules are as follows:`);
  prompt (`   Scissors cuts Paper covers Rock crushes`);
  prompt (`   Lizard poisons Spock smashes Scissors`);
  prompt (`   decapitates Lizard eats paper disproves`);
  prompt (`   Spock vaporizes Rock crushes Scissors\n`);
}

function getMatchWinner () {
  let userWins = 0;
  let computerWins = 0;
  while (userWins < MAX_SCORE && computerWins < MAX_SCORE) {

    readline.question('=> Click enter to continue\n');
    console.clear();

    let roundWinner = getRoundWinner(getUserChoice(), getComputerChoice());

    if (roundWinner === 'user') {
      userWins += 1;
    } else if (roundWinner === 'computer') {
      computerWins += 1;
    }

    prompt(`The score is user: ${userWins} to computer: ${computerWins} \n`);
  }

  if (userWins === MAX_SCORE) {
    return 'user';
  } else {
    return 'computer';
  }
}

function displayMatchWinner (winner) {
  
  if (winner === 'user') {
    prompt('YOU WIN!!!!\n=> YOU WIN!!!\n=> YOU WIN!!!');
  } else {
    prompt('COMPUTER WINS!!!\n=> COMPUTER WINS\n=> COMPUTER WINS!!!');
  }
  
}

prompt('Welcome to the ultimate game of ROCK, PAPER, SCISSORS!\n');

do {

  prompt ("IT'S A NEW MATCH");
  if (getReviewRulesChoice()[0] === 'y') displayRules();

  displayMatchWinner(getMatchWinner());

} while (playAgain());

prompt("Thank you for participating with us, please come again");

