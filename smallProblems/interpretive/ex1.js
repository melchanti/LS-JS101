/*
Problem:
  Input: number
  output: string
  Rules:
    1. All switches are initially off
    2. First round you turn all of them on
    3. Second round you toggle every other switch starting at switch 2
    4. Third round you toggle every third switch starting at switch 3
    5. So on, until you have passed count number of switches
Examples: Given
Data Structure: Place the switches in an object with true/false representing on/off
Algorithm:
  1. Set all the switches in the object to false
  2. Starting at the first item in the object, switch all the values to their opposite
  3. Starting at the second item in the object, switch every other value to its opposite
  4. Starting at the third item in the object, switch every third value to its opposite
  5. Repeat steps 2-4 until you have repeated the process the same number of switches.
*/

function joinAnd (array) {
  return array.slice(0, array.length - 1).join (', ') + ' and ' + array[array.length - 1];
}

function print (lightsOn, lightsOff) {
  let lightsOnString = joinAnd (lightsOn);
  let lightsOffString = joinAnd(lightsOff);

  lightsOnString = `${lightsOnString} are on`;
  lightsOffString = `lights ${lightsOffString} are now off`;

  return [lightsOnString, lightsOffString];
}

function lightsOn (switches) {
  let lights = {};

  for (let i = 1; i <= switches; i += 1) {
    lights[i] = false;
  }

  let lightsOn = [];
  let lightsOff = [];
  for (let loop = 1; loop <= switches; loop += 1) {
    lightsOn = [];
    lightsOff = [];
    for (let light = 1; light <= switches; light += 1) {

      if (light % loop === 0) {
        lights[light] = lights[light] ? false : true;
      }

      if (lights[light]){
        lightsOn.push(light);
      } else {
        lightsOff.push(light);
      }
    }
  }

  console.log (lightsOn);
  return lightsOn;
}

lightsOn(5);
lightsOn(100);