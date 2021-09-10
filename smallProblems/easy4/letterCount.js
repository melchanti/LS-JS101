function wordSizes (text) {
  if (text === '') return {};

  let textArray = text.split(' ');

  let sizes = textArray.reduce ((acc, initialValue) => {

    let value = initialValue.replace(/[^a-z]/gi,'');
    let valueLength = value.length;

    if (isNaN(acc[valueLength])) {
      acc[valueLength] = 1;
      return acc;
    }

    acc[valueLength] += 1;

    return acc;
  }, acc = {});

  return sizes;
}

console.log (wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log (wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log (wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log (wordSizes(''));                                            // {}