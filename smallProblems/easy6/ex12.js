function isBalanced (originalString) {
  let openParanthesis = 0;
  let closedBeforeOpen = false;
  originalString.split('').forEach (value => {
    if (value === '(') openParanthesis += 1;
    if (value === ')') openParanthesis -= 1;

    if (openParanthesis < 0) closedBeforeOpen = true;
    return undefined;
  });
  //console.log (`${originalString} is at ${openParanthesis}`);
  return openParanthesis === 0 && !closedBeforeOpen;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);