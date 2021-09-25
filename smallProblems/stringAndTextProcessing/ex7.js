function staggeredCaseOnlyLetters (originalString) {
  let letterCounter = 0;
  let returnedString = originalString.split('').reduce((accum, char) => {
    if (char.match(/[a-z]/i)) {
      if (letterCounter % 2 === 0) {
        letterCounter += 1;
        return accum + char.toUpperCase();
      }
      letterCounter += 1;
      return accum + char.toLowerCase();
    }

    return accum + char;
  }, '');

  console.log (returnedString);
  return returnedString;
}

function staggeredCaseAllCharacters (originalString) {
  let returnedString = originalString.split('').reduce((accum, char, index) => {
    if (index % 2 === 0) return accum + char.toUpperCase();
    return accum + char.toLowerCase();
  }, '');

  console.log (returnedString);
  return returnedString;
}

function staggeredCase (originalString, onlyLetters = true) {
  if (onlyLetters) return staggeredCaseOnlyLetters(originalString);

  return staggeredCaseAllCharacters(originalString);
}

staggeredCase('I Love Launch School!', true);        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS', false);                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"