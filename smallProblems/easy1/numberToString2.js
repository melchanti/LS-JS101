function integerToString(number) {
  let array = [];
  if (number===0)
    return '0';
    //let counter = 0;

  while (number > 0) {
   //console.log (`${counter} is ${number}, the array is ${array}`);
    array.push(number%10);
    number = Math.trunc((number/10));
    //counter ++;

  }

  return array.reverse().join('');
}

console.log (integerToString(4321));        // "4321"
console.log (integerToString(0));           // "0"
console.log (integerToString(5000));        // "5000"
console.log (integerToString(1234567890));  // "1234567890"