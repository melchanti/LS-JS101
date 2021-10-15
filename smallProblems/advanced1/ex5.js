function merge (array1, array2) {
  let merged = [];
  let array2ValuesMerged = [];
  let array1ValuesMerged = [];

  for (let index =0; index < array2.length; index += 1) {
    array2ValuesMerged.push(false);
  }

  for (let index = 0; index < array1.length; index += 1) {
    array1ValuesMerged.push(false);
  }

  for (let array1Index = 0; array1Index < array1.length; array1Index += 1) {
    for (let array2Index = 0; array2Index < array2.length; array2Index += 1) {
      if (array1[array1Index] < array2[array2Index]) {
        merged.push (array1[array1Index]);
        array1ValuesMerged[array1Index] = true;
        break;
      }

      if (!array2ValuesMerged[array2Index]){
        merged.push (array2[array2Index]);
        array2ValuesMerged[array2Index] = true;
      }
    }
  }

  for (let array1Index = 0; array1Index < array1.length; array1Index += 1) {
    if (!array1ValuesMerged[array1Index]) {
      merged.push(array1[array1Index]);
    }
  }

  for (let array2Index = 0; array2Index < array2.length; array2Index += 1) {
    if (!array2ValuesMerged[array2Index]) {
      merged.push (array2[array2Index]);
    }
  }


  console.log (merged);
  return merged;
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]