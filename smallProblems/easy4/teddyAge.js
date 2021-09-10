function displayAge(age) {
  console.log (`Teddy is ${age} years old!`);
}

function getAge(num1, num2) {
  let max = num1 >= num2 ? num1 : num2;
  let min = num1 <= num2 ? num1 : num2;
  let age = Math.floor (Math.random() * (max - min + 1)) + min;

  return age;
}

displayAge (getAge(2, 5));