function swapName (originalName) {
  let nameArray = originalName.split (' ');

  return `${nameArray[nameArray.length - 1]}, ${nameArray.slice(0, nameArray.length -1).join(' ')}`
}

console.log (swapName ('Karl Oskar Henriksson Ragvals'));