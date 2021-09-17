let MINUTES_PER_HOUR = 60;
let HOUR_PER_DAY = 24;
let MINUTES_PER_DAY = MINUTES_PER_HOUR * HOUR_PER_DAY;

function correctedMinutes (minutes) {
  if (minutes > 0) {
    minutes = minutes - MINUTES_PER_DAY;
  } else {
    minutes = minutes + MINUTES_PER_DAY;
  }

  if (minutes > MINUTES_PER_DAY || minutes < -MINUTES_PER_DAY) {
    
    minutes = correctedMinutes (minutes);
  }
  return minutes;
}

function timeOfDay (midnightMinutes) {
  let hour = 0;
  let minutes = 0;

  if (midnightMinutes > MINUTES_PER_DAY || midnightMinutes < -MINUTES_PER_DAY) {
    midnightMinutes = correctedMinutes (midnightMinutes);
  }

  if (midnightMinutes >= 0) {
    hour = Math.floor (midnightMinutes / MINUTES_PER_HOUR);
    minutes = Math.round (midnightMinutes % MINUTES_PER_HOUR);
  } else {
    let correctedNegative = MINUTES_PER_DAY + midnightMinutes;
    hour = Math.floor (correctedNegative / MINUTES_PER_HOUR);
    minutes = Math.round (correctedNegative % MINUTES_PER_HOUR);
  }

  hour = hour.toString();
  minutes = minutes.toString();

  return `${hour.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");