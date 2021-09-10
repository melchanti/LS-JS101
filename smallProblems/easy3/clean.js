function cleanUp (text) {
  let regex = /\W+|[0-9]+|_+/g;

  return text.replace(regex,' ');
}

console.log (cleanUp("---what's my 989898+*& line____?"));    // " what s my line "
