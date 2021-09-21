function alphabeticNumberSort (originalArray) {
  let dictionaryNumber = {0: 'zero', 1: 'one', 2: 'two', 
                          3: 'three', 4: 'four', 5: 'five',
                          6: 'six', 7: 'seven', 8: 'eight',
                          9: 'nine', 10: 'ten', 11: 'eleven',
                          12: 'twelve', 13: 'thirteen', 14: 'fourteen',
                          15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
                          18: 'eighteen', 19: 'nineteen'
  };
  let sortedArray = originalArray.map (value => dictionaryNumber[String(value)]).sort().map(
    value => Object.keys(dictionaryNumber).find(key => dictionaryNumber[key] === value));

  console.log (sortedArray);
  return sortedArray;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);