/** The marketing team is spending way too much time typing in hashtags.
*Let's help them with out own Hashtag Generator! 
*/

/**It must start with a hashtag (#).
*All words must have their first letter capitalized.
*If the final result is longer than 140 chars it must return false.
*If the input or the result is an empty string it must return false. 
*/

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const str1 = " Hello there thanks for trying my Kata";
const str2 = "    Hello     World   ";
const str3 = ""; 

function generateHashtag(str) {
  let newStr = '';
  //check if string is empty
  if (str == '') {
    return false;
  }
  //separate string by words and capitalize index 0 of every word
  newStr = str.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  //join by spaces
  newStr.splice(0, 0, '#');
  //use either splice() or unshift to add a '#' to the beginning
  return newStr.join('').length > 140 || newStr.join('') === '' || newStr.join('') === '#' ? false : newStr.join('');
  //check if length is greater than 140
}

// console.log(generateHashtag(str3));
console.log(" ".repeat(20));