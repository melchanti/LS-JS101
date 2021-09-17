function reverseWords (originalString) {
  return (originalString.split (' ').map (word => {
    if (word.length >= 5){
      return word.split('').reverse().join('');
    }

    return word;
  }).join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"