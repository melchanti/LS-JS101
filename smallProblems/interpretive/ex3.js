/*
Problem:
  Input: String, word representation
  Output: Boolean, whether the string can be spelled using the set of blocks
  Rules:
    1. Two letters of a block can't be in the same word
    2. A block is given
Examples: Given
Data Structures: Object to represent the block
Algorithm:
  1. Split the word into an array of letters
  2. Check if the value of the first letter key in the object is in the word
  3. If it's return false, otherwise move into the next letter
  4. Repeat until you receive a false or until the set is complete
*/

function isBlockWord (word) {
  let block = {
    B:'O', X:'K', D:'Q', C:'P', N:'A',
    G:'T', R:'E', F:'S', J:'W', H:'U',
    V:'I', L:'Y', Z:'M',
    O:'B', K:'X', Q:'D', P:'C', A:'N',
    T:'G', E:'R', S:'F', W:'J', U:'H',
    I:'V', Y:'L', M:'Z'
  };

  word = word.toUpperCase();

  for (letter of word) {
    if (!block[letter]) {
      return false;
    }

    if (word.match (block[letter])) {
      return false;
    }

    block[letter] = undefined;
  }

  return true;
}

console.log (isBlockWord('BBTCH'));
console.log (isBlockWord('BUTCH'));
console.log (isBlockWord('jest'));