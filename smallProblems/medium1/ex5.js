/*
Problem:
  Input: String
  Output: String with numbers as digits
  Rules:
    1. Take a string and convert the word numbers into digit numbers
    2. Numbers are between 0-9
Example: Given

Data Structures: Represent the numbers as an object

Algorithm:
  1. Split the string into an array
  2. Check if the word is a number
  3. Replace the english number with the corresponding digit number
  4. repeat steps 2-3 for all the words in the array
  5. Join the array as a string
*/

function wordToDigit (originalString) {
  let numbersObject = { 
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }

  let regex = /\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/gi

  let returnedString = originalString.replace(regex,function replace (r){
    return numbersObject[r];
  });


  return returnedString;
}

function wordToDigitArray (originalString) {

  let stringArray = originalString.split(' ');
    /*let returnedString = stringArray.map (word => {
    if (Object.keys(numbersObject).includes(word.replace(/\W/,'').toLowerCase())) {
      if (word.match(/\W/)){
        return numbersObject[word.replace(/\W/,'')] + word[word.length - 1];
      }
      return numbersObject[word.replace(/\W/,'')] 
    }

    return word;
  }).join(' ');
*/

  return returnedString;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');