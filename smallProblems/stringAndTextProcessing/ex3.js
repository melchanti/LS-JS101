function letterCaseCount (originalString) {
  let letterClassification = {lowercase: 0, uppercase: 0, neither: 0};

  for (let index = 0; index <originalString.length; index += 1) {
    if (originalString[index].match(/[a-z]/i)) {
      if (originalString[index] === originalString[index].toLowerCase()){
        letterClassification.lowercase += 1;
      } else {
        letterClassification.uppercase += 1;
      }
    } else {
      letterClassification.neither += 1;
    }
  }

  console.log (letterClassification);
  return letterClassification;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }