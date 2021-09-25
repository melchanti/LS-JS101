function staggeredCase (originalString) {
  let returnedString = originalString.split('').reduce((accum, char, index) => {
    if (index % 2 === 0) return accum + char.toUpperCase();
    else return accum + char.toLowerCase();
  }, '');

  console.log (returnedString);
  return returnedString;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"