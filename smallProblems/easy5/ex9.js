function countOccurrences (originalArray) {
  let countedValues = {};

  originalArray.forEach (value => {
    
    countedValues[value.toLowerCase()] = countedValues[value.toLowerCase()] || 0;

    countedValues[value.toLowerCase()] += 1;
  });

  logOccurrences(countedValues);
}

function logOccurrences (occurrences) {
  for (key in occurrences) {
    console.log (`${key} => ${occurrences[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'CAR'];

countOccurrences(vehicles);
