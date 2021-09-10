function logInBox (text, width=text.length+2) {

  let dash = `+${'-'.repeat(width)}+`;
  let space=`|${' '.repeat(width)}|`;

  let textArray = [];
  do {
    textArray.push (text.slice(0,width-2));

    text = text.slice(width-2,);
  } while (text);

  console.log (dash);
  console.log (space);
  textArray.forEach (value => console.log (`| ${value} ${' '.repeat(width - value.length - 2)}|`));
  console.log (space);
  console.log (dash);
}

logInBox('To boldly go where no one has gone before.', 10);
logInBox('');
logInBox('I have been where no one has been before and you gotta believe it.');