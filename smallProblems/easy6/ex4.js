function centerOf (originalString) {

  let returnedValue;
  if (originalString.length % 2 === 0) {
    returnedValue = originalString.slice (((originalString.length / 2) - 1), (originalString.length / 2) + 1);
  } else {
    returnedValue = originalString[Math.floor (originalString.length / 2)];
  }

  console.log (returnedValue);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"