function letterPercentages(string) {
  let lowerCasePercentage = ((string.replace(/[^a-z]/g,'').length / string.length) * 100).toFixed(2);
  let upperCasePercentage = ((string.replace(/[^A-Z]/g,'').length / string.length) * 100).toFixed(2);
  let neitherPercentage = ((string.replace(/[a-z]/gi,'').length / string.length) * 100).toFixed(2);

  let percentages = {
    lowercase: String(lowerCasePercentage),
    uppercase: String(upperCasePercentage),
    neither: String(neitherPercentage)
  };

  console.log (percentages);
  return percentages;
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }