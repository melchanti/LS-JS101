function stringy (number) {
  let string = '';
  for (let i = number; i >= 1; i--){
    if ((number - i) % 2 == 0) {
      string = string + '1';
      continue;
    }

    string = string + '0';
  }

  return string;
}

console.log (stringy(6));    // "101010"
console.log (stringy(9));    // "101010101"
console.log (stringy(4));    // "1010"
console.log (stringy(7));    // "1010101"