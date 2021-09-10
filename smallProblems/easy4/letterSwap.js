function swap (text) {
  let stringArray = text.split (' ');

  let newArray = stringArray.map (value => {
    if (value.length === 1) return value;

    let valueArray = value.split('');

    let firstLetter = valueArray[0];
    valueArray[0] = valueArray[valueArray.length - 1];

    valueArray[valueArray.length - 1] = firstLetter;

    return valueArray.join('');
  });

  return newArray.join(' ');
}

console.log (swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log (swap('Abcde'));                          // "ebcdA"
console.log (swap('a'));                              // "a"