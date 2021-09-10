function getGrade (num1, num2, num3) {

  let mean = (num1 + num2 + num3) / 3;

  if (mean >= 90) {
    console.log ('A');
    return 'A';
  } else if (mean >= 80) {
    console.log ('B');
    return 'B';
  } else if (mean >= 70) {
    console.log ('C');
    return 'C';
  } else if (mean >= 60) {
    console.log ('D');
    return 'D';
  } else {
    console.log ('F');
    return 'F';
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"