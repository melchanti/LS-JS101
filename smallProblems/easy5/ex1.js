/*Problem: Given an input number, translate it to degrees, minutes and seconds
Example:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Data structures: Input as a float number, output as a string

Algorithm:
START

LET MINUTES_PER_DEGREE = 60
LET SECONDS_PER_MINUTE = 60

#Given a number
VALIDATENUMBER
function (CONVERTNUMBER)

LET degrees = Math.floor (number)

LET decimal = (number - degrees) * MINUTES_PER_MINUTE
LET minutes = Math.floor (decimal)
LET seconds = Math.round ((decimal - minutes) * SECONDS_PER_MINUTE)

DISPLAY (degrees°minutes'seconds")

CONVERTNUMBER {
  
}
END
*/

function dms(number) {
  while (number < 0 || number > 360) {
    number = convertOuterRange(number);
  }

  let degrees = Math.floor(number);

  let decimal = (number - degrees)*60;

  let minutes = Math.floor (decimal);

  let seconds = Math.round((decimal - parseInt(decimal)) * 60);

  console.log (`${degrees}°${String(minutes).padStart(2,'0')}'${seconds.toString().padStart(2,'0')}"`)
  return `${degrees}°${String(minutes).padStart(5,'0')}'${seconds.toString().padStart(2,'0')}"`
}

function convertOuterRange(number) {
  if (number < 0 && number > -360) {
    return (360 + number);
  } else if (number < -360) {
    return 360 + (360 + number);
  } else {
    return number - 360;
  }
}
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

console.log ('\n');

dms(-1);   // 359°00'00"
dms(800);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-800); // 300°00'00"