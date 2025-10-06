// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
// Return value as boolean values, true for the string to contains "English", false for it does not.
const testSentences = [
  { sentence: 'abcEnglishdef', output: true },
  { sentence: 'dkfj kdjfeNglisHdkhglkd', output: true },
  { sentence: 'aadegnlishuyee', output: false }
];

function spEng(sentence){
  const re = /(english)/ig;
  return re.test(sentence);
}

for (let i = 0; i < testSentences.length; i++) {
  console.log(`is: ${spEng(testSentences[i].sentence)}, should be: ${testSentences[i].output}`);
}
