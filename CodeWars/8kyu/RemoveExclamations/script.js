/**
 * Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

const str1 = 'Some! Text!'
const str2 = 'The! Loudest! Of! All! The! Texts!!!'
const str3 = 'This is a bit more acceptable! Hahaaa! Psych!!!!!!!!!!!!!'

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

console.log(`str1 output: ${removeExclamationMarks(str1)}`)
console.log(`str2 output: ${removeExclamationMarks(str2)}`)
console.log(`str3 output: ${removeExclamationMarks(str3)}`)