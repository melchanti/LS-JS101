const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MIDDLE_SQUARE = '5';

const VALID_YES_NO = ['yes', 'y', 'no', 'n'];
const GAMES_TO_WIN = 5;

const WINNING_LINES = [ [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
];

function prompt (message) {
  console.log (`=> ${message}`);
}

function joinOr (array, delimiter = ', ', joining = 'or') {

  let joinedString;

  switch (array.length) {
    case 0:
      joinedString = '';
      break;
    case 1:
      joinedString = String(array[0]);
      break;
    case 2:
      joinedString = `${array[0]} ${joining} ${array[1]}`;
      break;
    default:
      joinedString = `${array.slice(0, -1).join(delimiter)}${delimiter.trim()} ${joining} ` +
      `${array[array.length - 1]}`;
  }
  return joinedString;
}

function displayBoard(board) {
  console.clear();

  console.log (`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log ('');
  console.log (`     |     |`);
  console.log (`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log (`     |     |`);
  console.log (`-----+-----+-----`);
  console.log (`     |     |`);
  console.log (`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log (`     |     |`);
  console.log (`-----+-----+-----`);
  console.log (`     |     |`);
  console.log (`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log (`     |     |`);
  console.log(``);
}

function initializeBoard () {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square; //declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);

    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid Choice");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoice (board, marker) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line].map (sq => String(sq));


    if ([sq1, sq2].every(sq => board[sq] === marker) &&
      board[sq3] === INITIAL_MARKER) {
      console.log (sq3);
      return sq3;
    } else if ([sq1, sq3].every(sq => board[sq] === marker) &&
      board[sq2] === INITIAL_MARKER) {
      return sq2;
    } else if ([sq3, sq2].every(sq => board[sq] === marker) &&
      board[sq1] === INITIAL_MARKER) {
      return sq1;
    }
  }

  return null;
}

function offensiveSquare (board) {
  return computerChoice(board, COMPUTER_MARKER);
}

function defensiveSquare (board) {
  return computerChoice (board, HUMAN_MARKER);
}
function computerChoosesSquare(board) {
  let square;
  if (offensiveSquare(board)) {
    square = offensiveSquare(board);
  } else if (defensiveSquare(board)) {
    square = defensiveSquare(board);
  } else if (emptySquares(board).includes(MIDDLE_SQUARE)) {
    square = MIDDLE_SQUARE;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = String(emptySquares(board)[randomIndex]);
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull (board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
function someoneWon (board) {
  return !!detectWinner(board);
}

function matchWinner (playerWins, computerWins) {
  if (playerWins === GAMES_TO_WIN) {
    return 'Player';
  } else if (computerWins === GAMES_TO_WIN) {
    return 'Computer';
  }

  return null;
}

function getFirstPlayer () {
  let first;
  let validChoices = ['player', 'computer', 'choose'];
  console.clear();

  while (true) {
    prompt(`Would you like to go first or let the computer go first (${joinOr(validChoices)})`);
    first = readline.question().toLowerCase();

    if (validChoices.includes(first)) break;

    prompt ("You've selected an invalid entry, try again");
  }

  if (first === 'choose') {
    //The below random index is a number between 0 and 1 only
    //Notice how it doesn't return a 2 and that's because we want to only
    //choose player or computer
    let randomIndex = Math.floor(Math.random() * (validChoices.length - 1));
    first = validChoices[randomIndex];
  }
  return first;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer (currentPlayer) {
  if (currentPlayer === 'computer') return 'player';

  return 'computer';
}

function askToPlayAgain () {
  let answer;

  while (true) {
    prompt('Play agin? (y or n)');
    answer = readline.question().toLowerCase().trim();

    if (VALID_YES_NO.includes(answer)) break;
  }

  return answer[0] === 'y';
}
//Match Loop
while (true) {
  let board = initializeBoard();

  let playerWins = 0;
  let computerWins = 0;

  //Game Loop
  while (true) {
    board = initializeBoard(board);

    let currentPlayer = getFirstPlayer();

    //Turn Loop
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won the game!`);
      if (detectWinner(board) === 'Player') {
        playerWins += 1;
      } else {
        computerWins += 1;
      }
    } else {
      prompt ("It's a tie!");
    }

    prompt(`The score is Player: ${playerWins} to Computer: ${computerWins}`);

    prompt ('Hit any button to continue:');
    readline.question();

    if (matchWinner(playerWins, computerWins)) break;
  }

  console.clear();
  prompt (`${matchWinner(playerWins, computerWins).toUpperCase()} WON THE MATCH!!!!!`);

  if (!askToPlayAgain()) break;
}

prompt ('Thanks for playing Tic Tac Toe!');