const readline = require ('readline-sync');
const VALID_YES_NO = ['yes', 'no', 'y', 'n'];

function prompt (msg) {
  console.log (`=> ${msg}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }

  return array;
}

function initializeCards () {
  let cards = [];
  let suits = ['H', 'S', 'D', 'C'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  suits.forEach (suit => {
    numbers.forEach (number => {
      cards.push ([suit, number]);
    });
  });

  return shuffle(cards);
}

function cardValue (card) {
  switch (card[1]) {
    case 'A':
      return 11;
    case 'J':
      return 10;
    case 'Q':
      return 10;
    case 'K':
      return 10;
    default:
      return Number(card[1]);
  }
}

function calculateSum (hand) {
  let sum = hand.reduce ((accum, card) => {
    accum += cardValue(card);
    return accum;
  }, 0);

  let cardsWithAce = hand.filter (card => card [1] === 'A');

  cardsWithAce.forEach (_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(hand) {
  return calculateSum(hand) > 21;
}

function getPlayerChoice () {
  let validChoices = ['hit', 'stay'];
  let answer = '';
  while (true) {
    prompt ('hit or stay?');
    answer = readline.question('=> ').toLowerCase().trim();
    console.clear();

    if (validChoices.includes(answer)) break;
  }

  return answer;
}

function getDealerChoice (sum) {
  prompt ('Hit any button to continue');
  readline.question();
  console.clear();

  if (sum >= 17) {
    return 'stay';
  } else {
    return 'hit';
  }
}

function getChoice (turn, hand) {
  if (turn === 'player') {
    return getPlayerChoice();
  } else {
    return getDealerChoice(calculateSum(hand));
  }
}

function joinHands (hand) {
  return hand.map(card => `${card[0]}${card[1]}`).join(', ');
}

function turn(turn, hand, deck) {
  let answer = undefined;

  while (answer !== 'stay' && !busted(hand) && calculateSum(hand) !== 21) {
    answer = getChoice (turn, hand);

    if (answer === 'hit') hand.push (deck.shift());
    prompt(`${turn}'s current hand is ${joinHands(hand)}, the sum is ${calculateSum(hand)}.`);
  }

  let result;
  if (busted(hand)) {
    result = 'busted';
  } else {
    prompt (`${turn} chose to stay` + `. The sum is ${calculateSum(hand)}`);
    result = calculateSum(hand);
  }
  prompt ('hit any button to proceed');
  readline.question();
  return result;
}

function displayResults (playerSum, dealerSum = 0) {
  console.clear();

  if (playerSum === 'busted') {
    prompt ("You've busted, please try again");
  } else if (dealerSum === 'busted') {
    prompt ("CONGRATULATIONS, DEALER BUSTED, YOU WIN!!!!" );
  } else {
    prompt (`Your sum is ${playerSum}, dealer's sum is ${dealerSum}`);
    if (playerSum >= dealerSum) {
      prompt ("CONGRATULATIONS, YOU WIN!!!!" );
    } else {
      prompt ('Dealer won, please try again');
    }
  }
}

function playAgain () {
  let answer;

  while (true) {
    prompt ('Would you like to play again? (y or n)');
    answer = readline.question('=> ').toLowerCase();

    if (VALID_YES_NO.includes(answer)) break;

    prompt ("You've entered an invalid entery");
  }
  console.clear();
  return (answer[0] === 'y');
}

function firstHand (deck, playerHand, dealerHand) {
  playerHand.push (deck.shift());
  prompt (`Your hand is ${joinHands(playerHand)}`);

  dealerHand.push (deck.shift());
  prompt (`Dealer hand is ${joinHands(dealerHand)}`);

  console.clear();

  playerHand.push (deck.shift());
  prompt (`Your hand is ${joinHands(playerHand)}, the sum is ${calculateSum(playerHand)}`);

  dealerHand.push (deck.shift());
  prompt (`Dealer hand is ${joinHands([dealerHand[0]])}`);
}

prompt ('WELCOME TO THE FAMOUS GAME OF 21!');

while (true) {
  let deck = initializeCards();

  let playerHand = [];
  let dealerHand = [];

  firstHand (deck, playerHand, dealerHand);
  let playerSum = turn('player', playerHand, deck);
  if (playerSum === 'busted') {
    displayResults (playerSum);
  } else {
    displayResults (playerSum, turn ('dealer', dealerHand, deck));
  }

  if (!playAgain()) break;
}

prompt ('Thank you for playing 21 ');