function isPalindrome(text) {
  let halfLength= text.length / 2;
  let firstIndex = Math.floor (halfLength);
  let secondIndex = halfLength === parseInt(halfLength) ? halfLength : Math.ceil (halfLength);

  let firstHalf = text.slice (0,firstIndex);
  let secondHalfReversed = text.slice(secondIndex,).split('').reverse().join('');
  
  return firstHalf === secondHalfReversed

}

function isRealPalindrome (text) {
 return isPalindrome(text.toLowerCase().replace(/\W|_/g, ''));
}

function isPalindromicNumber(number) {
  return isRealPalindrome(String(number));
}

console.log (isPalindrome('madam'));               // true
console.log (isPalindrome('Madam'));               // false (case matters)
console.log (isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log (isPalindrome('356653'));              // true

console.log('');

console.log (isRealPalindrome('madam'));               // true
console.log (isRealPalindrome('Madam'));               // true (case does not matter)
console.log (isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log (isRealPalindrome('356653'));              // true
console.log (isRealPalindrome('356a-653'));             // true
console.log (isRealPalindrome('123ab321'));            // false

console.log ('');
console.log ((0039).toString());
console.log (isPalindromicNumber(003454300));        // true
console.log (isPalindromicNumber(123210));       // false
console.log (isPalindromicNumber(22));           // true
console.log (isPalindromicNumber(5));            // true