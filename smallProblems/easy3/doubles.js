function twice (num) {

  let string = String(num)
  let length = Number (string.length);

  let midPoint = length/2;

  let firstString = string.slice(0,midPoint);
  let secondString = string.slice(midPoint,);

  if (secondString === firstString){
    console.log (num);
    return num;
  }
  
  console.log (num*2);
  return num*2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
