function reverseSentence (originalSentence) {
  return originalSentence.split(' ').reverse().join(' ');
}

console.log (reverseSentence(''));
console.log (reverseSentence('Hello World'));
console.log (reverseSentence('Reverese these words'));