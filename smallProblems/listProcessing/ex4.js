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

  console.log (arraySubstring);
  return arraySubstring;
}

function subStrings (originalText) {
  let substrings = [];

  originalText.split('').forEach ((_, index) => {
    substrings = substrings.concat (leadingSubstrings(originalText.split('').slice(index,).join('')));
  });

  console.log (substrings);
  return substrings;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

subStrings ('abcde');