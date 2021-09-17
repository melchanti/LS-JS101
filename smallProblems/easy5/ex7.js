function multiplyList (arr1, arr2) {
  return arr1.reduce ((arr, value, index) => {
    arr.push(value*arr2[index]);
    return arr;
  }, []);
}

console.log (multiplyList ([3, 5, 7], [9, 10, 11]));