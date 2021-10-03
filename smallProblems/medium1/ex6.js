function fibonacci(originalNumber) {
  if (originalNumber === 1 || originalNumber === 2) return 1;

  return fibonacci(originalNumber - 1) + fibonacci(originalNumber - 2);
}

console.log (fibonacci(1));       // 1
console.log (fibonacci(2));       // 1
console.log (fibonacci(3));       // 2
console.log (fibonacci(4));       // 3
console.log (fibonacci(5));       // 5
console.log (fibonacci(12));    // 144
console.log (fibonacci(20));     // 6765
console.log (fibonacci(75));