const letterPositions = function(sentence) {
  // let sentenceNoSpaces = sentence.split(' ').join('');
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    } else {
      continue;
    }
  }
  return results;
}


console.log(letterPositions("lighthouse in the house"));