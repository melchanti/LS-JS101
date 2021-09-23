/*Algorithm
1. Get a nested array with the outer layer made of as many elements as there are fruits
  the inner layer should be each element repeated as many times as it needs to be repeated
2. Concat the array's elements into one 1D array
*/

function buyFruit (originalArray) {
  let elements = originalArray.map (fruit => {
    let element = [];
    for (let i = 1; i <= fruit [1]; i += 1) {
      element.push (fruit[0]);
    }

    return element;
  }).flat();

  //let returnedElements = elements.reduce ((accum, fruitArray) => accum.concat(fruitArray), []);

  console.log (elements);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]