function multiplicativeAverage (arr) {
  
  let multiple = arr.reduce ((arr, value) => arr*value, 1);

  return (multiple/arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"