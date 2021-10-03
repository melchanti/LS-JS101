function swapCase (originalString) {
  let returnedString = originalString.split('').map(
    char => char === char.toLowerCase()? char.toUpperCase(): char.toLowerCase()).join('');

  return returnedString;
}

function swapCase2 (originalString) {
  returnedString = originalString.replace (/[a-z]/ig, function(v) {
    return v === v.toLowerCase() ? v.toUpperCase(): v.toLowerCase()});

  return returnedString;
}

swapCase ('CamelCase');
swapCase ('Tonight on XYX-TV');