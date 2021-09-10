function findFibonacciIndexByLength (digits) {
  let fib1 = 1n;
  let fib2 = 1n;
  let fib = [fib1, fib2];
  let counter = 2;
  let index = 0;

  do {
    let number = fib[counter-1] + fib[counter-2];

    if (number > 10n ** (digits - 1n)){
      index = counter;
      break;
    }

    fib.push(number);

    counter += 1;
  } while (true);
console.log (index + 1);
return BigInt(index + 1);
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
console.log (findFibonacciIndexByLength(10000n) === 47847n);