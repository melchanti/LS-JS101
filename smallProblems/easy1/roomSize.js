let rlSync = require ('readline-sync');
let length = parseInt (rlSync.question('Enter the length of the room in meters: '));
let width = parseInt (rlSync.question('Enter the width of the room in meters: '));

console.log (`The area of the room is ${length*width} square meters (${length*width*10.7639}).`);