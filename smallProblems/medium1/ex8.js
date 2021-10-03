let fibSeq = {1: 1, 2: 1}

function fibonacci(originalNumber) {

  if (originalNumber <= 2) return 1;
  let prevNumber = fibSeq[String(originalNumber - 1)] ? fibSeq[String(originalNumber - 1)] : fibonacci(originalNumber - 1);
  let secPrevNumber = fibSeq[String(originalNumber - 2)] ? fibSeq[String(originalNumber - 2)] : fibonacci(originalNumber - 2);

  fibSeq[originalNumber] = prevNumber + secPrevNumber;
  return fibSeq[originalNumber];
}

console.log (fibonacci(1));       // 1
console.log (fibonacci(2));       // 1
console.log (fibonacci(3));       // 2
console.log (fibonacci(4));       // 3
console.log (fibonacci(5));       // 5
console.log (fibonacci(12));    // 144
console.log (fibonacci(20));     // 6765
console.log (fibonacci(75));