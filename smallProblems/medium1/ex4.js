/*
Problem:
  Input: String argument
  Output: An array and a number
  Rules: 
    1. Split the string into separate words (the commands for the miniture program)
    2. Use the commands to operate on the array(stack) and number (register), using the following rules
      n : Place a value, n, in the register. Do not modify the stack.
      PUSH : Push the register value onto the stack. Leave the value in the register.
      ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
      SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
      MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
      DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
      REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
      POP : Remove the topmost item from the stack and place it in the register.
      PRINT : Print the register value.
    3. Commands are all valid
    4. Possible non-integer values
    5. possible division by 0
Examples: Given

Data Structures: Array for the possible commands

Algorithm: 
  1. Add all the valid commands to an object
  2. Split the given string into separate words
  3. Find out whether the word command is valid
  4. Find out what the word command is
  5. Perform the action given by the command
  6. Repeat steps 3-5 for all commands
*/

function performCommand (command, stack, register) {
  let poppedValue;
  switch (command) {
    case 'PUSH':
      stack.push(register);
      break;
    case 'ADD':
      register = register + stack.pop();
      break;
    case 'SUB':
      register = register - stack.pop();
      break;
    case 'MULT':
      register = register * stack.pop();
      break;
    case 'DIV':
      poppedValue = stack.pop();
      register = poppedValue ? parseInt(register / poppedValue) : register;
      if (!poppedValue) console.log ('attempted division by 0 register unchanged ' + register);
      break;
    case 'REMAINDER':
      poppedValue = stack.pop();
      register = poppedValue ? register % poppedValue: register;
      if (!poppedValue) console.log ('attempted division by 0 register unchanged ' + register);
      break;
    case 'POP':
      register = stack.pop();
      break;
    case 'PRINT':
      console.log (register);
      break;
    default:
      register = Number(command);
  }

  return register;

}
function minilang (originalString) {
  let userCommands = originalString.split (' ');

  let possibleCommands = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER',
                          'POP', 'PRINT'];

  let stack = [];
  let register = 0;
  
  while (userCommands.length > 0){
    let currentCommand = userCommands.shift();

    if (Number(currentCommand) === NaN && !possibleCommands.includes(currentCommand)){
      console.log ("You've entered an invalid command");
      break;
    }

    register = performCommand (currentCommand, stack, register);
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)