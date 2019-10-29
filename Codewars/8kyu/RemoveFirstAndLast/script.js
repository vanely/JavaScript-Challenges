// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.You don't have to worry with strings with less than two characters.

const str1 = 'eloquent';
const str2 = 'country';
const str3 = 'person';
const str4 = 'place';

function removeChar(str) {
  return str.split('').splice(1, str.length - 2).join('');
};

// simplified (still using array methods)
const removeChar = (str) => str.slice(1, -1);

// simplified with string method
const removeChar = (str) => str.substring(1, str.length - 1);

console.log('eloquent :', removeChar(str1));
console.log('country :', removeChar(str2));
console.log('person :', removeChar(str3));
console.log('place :', removeChar(str4));