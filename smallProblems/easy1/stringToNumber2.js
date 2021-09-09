function stringToInteger(string) {
  let DIGITS = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 0:0};

  let counter = (string.length) - 1;
  let number = 0;
  let array = string.split('');
  while (array.length !== 0){

    let letter = array.shift();
    number = number + (DIGITS[letter] * (10**counter));
    counter --;
  }
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true