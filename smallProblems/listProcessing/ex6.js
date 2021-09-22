function leadingSubstrings (originalText) {
  let arraySubstring = [];

  /*originalText.split('').forEach ((_, index) => {
    arraySubstring.push (originalText.slice(0,index + 1));
  });
*/
  arraySubstring = originalText.split('').reduce ((accum, _, index) => {
    accum.push (originalText.slice(0, index + 1));
    return accum;
  }, []);
  return arraySubstring;
}

function subStrings (originalText) {
  let substrings = [];

  originalText.split('').forEach ((_, index) => {
    substrings = substrings.concat (leadingSubstrings(originalText.split('').slice(index,).join('')));
  });
  return substrings;
}

function palindromes (originalText) {
  let substrings = subStrings(originalText);

  let filteredArray = substrings.filter (value => {
    let reverseValue = value.split('').map((_, index)  => value[[value.length - 1 - index]]).join('');
    return value === reverseValue && value.length !== 1;
  });

  console.log (filteredArray);
  return filteredArray;
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]