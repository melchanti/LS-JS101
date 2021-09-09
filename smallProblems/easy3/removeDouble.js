/*
P: Given a string, return a string with no duplicate
E: crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
D: Input, string. Output, string
A:
START
#GIVEN a string

LET array = string[0];
for (let i=1; i < string.length - 1; i++) {
  if (string[i] != string [i-1])
    array.push(string[i]);
}

return array.split('');
}

END
*/

/*function crunch(string) {
  let array = [string[0]];
  for (let i = 1; i <= string.length -1; i++) {
    if (string[i] != string [i-1])
      array.push(string[i]);
  }

  return array.join('');
}*/

function crunch (string) {

  return string.replace(/(.)(?=\1)/g,'');
}

console.log (crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log (crunch('4444abcabccba'));              // "4abcabcba"
console.log (crunch('ggggggggggggggg'));            // "g"
console.log (crunch('a'));                          // "a"
console.log (crunch(''));                           // ""