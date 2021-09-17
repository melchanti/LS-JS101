let MINUTE_PER_HOUR = 60;
let HOUR_PER_DAY = 24;
let MINUTE_PER_DAY = MINUTE_PER_HOUR * HOUR_PER_DAY;

function afterMidnight (time) {
  let hourMinute = time.split(':');
  if (hourMinute[0] === '24') return 0;
  return (Number(hourMinute[0]) * MINUTE_PER_HOUR) + Number(hourMinute[1]);
}

function beforeMidnight (time) {
  let hourMinute = time.split (':');
  if (hourMinute[0] === '00') return 0;

  return MINUTE_PER_DAY - ((Number(hourMinute[0]) * MINUTE_PER_HOUR) + Number(hourMinute[1]));

}
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);