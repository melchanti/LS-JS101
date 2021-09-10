let readline = require ('readline-sync');

let noun = readline.question ('Enter a noun: ');
let verb = readline.question ('Enter a verb: ');
let adjective = readline.question ('Enter an adjective: ');
let adverb = readline.question ('Enter an adverb: ');



console.log (`Do you like to ${verb} your ${adjective} ${noun} along in a dark alley ${adverb}`);
console.log (`If you do that's great, I would also ${verb} my ${adjective} ${noun} ${adverb}`);
console.log (`I heard the doctor ${verb} his patients in a ${adjective} ${noun} very ${adverb}`);