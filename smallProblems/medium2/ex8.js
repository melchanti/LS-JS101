/*
Problem:
  Input: String
  Output: Two strings
  Rules:
    1. Find the longest sentence in a string
    2. Sentences may end with ., !, or ?
    3. print the longest sentence along with its punctuation
    4. print the length of the sentence
  
  Examples: Given

  Data Structures: Present the string as an array of sentences

  Algorithm:
    1. Split the string into sentences
    2. Find the length of each sentence
    3. Compare the length of each sentence
    4. Return the sentence with the highest length
    5. Find the punctuation that ended the sentence
    6. Add the punctuation to the sentence
*/

function longestSentence (text) {
  let sentenceArray = text.split(/[.?!] /);

  let returnedSentence = sentenceArray.reduce ((longSentence, currentSentence) => {
    if (longSentence.split(' ').length <= currentSentence.split(' ').length){
      return currentSentence;
    }
    return longSentence;
  }, ' ');

  let returnedSentenceLength = returnedSentence.split (' ').length;

  let regex = new RegExp(`${returnedSentence}`);

  let sentenceIndex = text.match(regex).index;

  let fullSentence = text.slice(sentenceIndex, sentenceIndex + returnedSentence.length + 1);

  console.log (fullSentence);

  console.log (`The longest sentence has ${returnedSentenceLength} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, 
//conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.