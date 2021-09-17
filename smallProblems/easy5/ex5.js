function interleave (arr1, arr2){
  return arr1.reduce ((arr, value, index) => {
    arr.push (value, arr2[index]);
    return arr;
  }, []);
}

console.log (interleave([1, 2, 3], ['a', 'b', 'c']));

