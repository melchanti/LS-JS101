/*
Problem:
  Input: a number
  Output: a number
  Rules:
    1. Return the fibonacci number
    2. If the passed number (nth) is 1 or 2, return 2
    3. If nth is more than 2, return the sum of n-1 and n-2
Examples: Given
Data Structure: Use an array to collect the sum of the numbers

Algorithm:
  1. Initialize an array with two 1 as the first two indeces [1, 1]
  2. Add another element to the array that is equal to the sum of the previous two indices
  3. Repeat step 2 until you reach the nth number
  4. Return the nth number
*/

function fibonacci (nth) {
  let fibSeq = [1, 1];

  for (let i = 2; i < nth; i += 1) {
    fibSeq.push (fibSeq[i - 1] + fibSeq[i - 2]);
  }

  console.log (fibSeq[nth - 1]);
  return fibSeq[nth - 1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050