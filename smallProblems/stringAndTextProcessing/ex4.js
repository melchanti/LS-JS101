function wordCap (originalString) {
  let returnedString = originalString.replace (/\b([a-z])/gi, function(v) 
                        {return v.toUpperCase(); });
  return returnedString;
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'