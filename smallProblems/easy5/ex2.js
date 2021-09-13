function union (arr1, arr2) {
  let arr3 = arr1.concat(arr2);

  let filteredArray = [];

  arr3.forEach (value => {
    if (!(filteredArray.includes(value))) filteredArray.push(value)
  });

  console.log (filteredArray);
  return filteredArray;
}

union([1, 3, 5, 5, 9], [3, 6, 9]);    // [1, 3, 5, 6, 9]
