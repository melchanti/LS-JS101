function digitList (num) {
  let arr = [];

  while (num) {
    arr.unshift (num % 10);
    num = parseInt (num / 10);
  }
  return arr;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]