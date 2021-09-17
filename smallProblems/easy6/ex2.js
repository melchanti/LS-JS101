function doubleConsonants (string) {

  //let returnValue;
  if (string === '') return = '';
  return = string.split('').map (value => {
    if (value.match (/^[aeiou0-9-]|\W$/i)) return value;
    return value + value;
}).join('');

//console.log (returnValue);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""