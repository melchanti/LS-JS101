function repeater (string) {
  if (string === '') return '';
  return string.split('').map (value => {
    if (value.match (/^[aeiou0-9-]|\W$/i)) return value;
    return value + value;
}).join('');
}

console.log (repeater('Hello'));        // "HHeelllloo"
console.log (repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log (repeater(''));             // ""