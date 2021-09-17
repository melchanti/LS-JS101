function average (originalArray) {
  let sum = originalArray.reduce ((previousValue, currentValue) => previousValue+currentValue, 0);

  console.log (Math.floor (sum / originalArray.length));
  
  return Math.floor(sum / originalArray.length);

}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40