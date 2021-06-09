/**
 * Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.
 * And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.
 * 
 * Task:
 * Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:
 * 
 * The word should not begin with the letter "I", for example Inspire.
 * The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
 * The first letter should not be lowercase, for example road.
 * If the word does not meet the rules, we return "Invalid word".
 */

const word1 = "Phone"; // iPhone 
const word2 = "World"; // iWorld
const word3 = "Human"; // iHuman
const word4 = "Programmer"; // iProgrammer
const word5 = "Inspire"; // Invalid word
const word6 = "East"; // Invalid word
const word7 = "Peace"; // Invalid word
const word8 = "road"; // Invalid word

function checkForIAtBeginning(word) {
  return word.charAt(0) === 'I' ? true : false;
}

function checkForLowercaseAtBeginning(word) {
  return word.charCodeAt(0) >= 97 ? true : false;
}

function checkIfVowelsAreGreaterThanConsonats(word) {
  const vowels = {'a':'a', 'e':'e', 'i':'i', 'o':'o', 'u':'u'};
  let vowelCount = 0;
  let consonantCount = 0;

  word.split('').forEach((letter) => {
    if (vowels[letter.toLowerCase()]) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  })

  return vowelCount >= consonantCount ? true : false;
}

function convertToI(word) {
  if (checkForIAtBeginning(word)) {
    return "Invalid word";
  }
  if (checkForLowercaseAtBeginning(word)) {
    return "Invalid word";
  }
  if (checkIfVowelsAreGreaterThanConsonats(word)) {
    return "Invalid word";
  }

  return `i${word}`;
}

// console.log(checkForIAtBeginning(word4));
// console.log(checkForLowercaseAtBeginning(word4));
// console.log(checkIfVowelsAreGreaterThanConsonats(word4));
console.log(convertToI(word1));
console.log(convertToI(word2));
console.log(convertToI(word3));
console.log(convertToI(word4));
console.log(convertToI(word5));
console.log(convertToI(word6));
console.log(convertToI(word7));
console.log(convertToI(word8));

// regEx approach
////////////////////////////////////////////////////////////////////////////////////////////////
function i(word) {
  const beginsWithLowerCaseOrI = /^[a-zI]/.test(word)
  const vowelsCount = word.length - word.replace(/[aeiou]/ig, '').length;
  const consonantsCount = word.replace(/[aeiou]/ig, '').length;

  return beginsWithLowerCaseOrI || vowelsCount >= consonantsCount ? "Invalid word" : `i${word}`;
}

console.log(i(word1));
console.log(i(word2));
console.log(i(word3));
console.log(i(word4));
console.log(i(word5));
console.log(i(word6));
console.log(i(word7));
console.log(i(word8));
//////////////////////////////////////////////////////////////////////////////////////////////