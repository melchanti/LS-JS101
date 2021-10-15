/*
Problem:
  Input: A string
  Output: A string
  Rules:
    1. Input nouns, adjectives, verbs and adverbs into the inputted string
    2. The madlib should have a ! before the word that you want to replace
    3. Only 4 types of words are added by the program into the sentence
Examples:
  Input: The !adjective brown !noun !adverb !verb the !adjective yellow !noun, who !adverb !verb
        his !noun and looks around.
  Output: // The "sleepy" brown "cat" "noisily"
          // "licks" the "sleepy" yellow
        // "dog", who "lazily" "licks" his
        // "tail" and looks around.
Date Structure: The list of words should be in an object.
                The input and outputs are strings
Algorithm:
  1. Check the first word of the string, 
  2. If it has a word that needs to be filled in, replace it. Otherwise leave it as it's
  3. Repeat 1-2 until you are done with the words
*/

function getRandomWordFromArray (array) {
  let randomIndex = Math.floor(Math.random() * array.length);

  return array [randomIndex];
}

function madlibs (template) {
  const WORDS = {
    '!adjective': ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    '!noun': ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    '!verb': ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    '!adverb': ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  return template.split(' ').map(word => {
    let punctuation = '';
    
    if (word.match(/[^a-zA-Z0-9]$/)) {
      punctuation = word[word.length - 1];
      word = word.slice(0,word.length - 1);
    }

    if (Object.keys(WORDS).includes(word)) {
      return getRandomWordFromArray (WORDS[word]) + punctuation;
    }

    else {
      return word + punctuation;
    }
  }).join(' ');
}

let template = "The !adjective brown !noun !adverb !verb the !adjective yellow !noun, who !adverb !verb" + 
                " his !noun and looks around."
console.log (madlibs(template));
