function removeVowels (arrayStrings) {
  let returnedStrings = arrayStrings.map (string => string.replace(/[aeiou]/gi, ''));

  console.log (returnedStrings);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
