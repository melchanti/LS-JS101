function sequence (originalNumber) {
  let returnedArray = [];

  for (i = 1; i <= originalNumber; i ++) {
    returnedArray.push (i);
  }

  console.log (returnedArray);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]