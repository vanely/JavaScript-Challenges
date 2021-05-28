/**
 * https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 * 
 * Examples:
 * solution('abc', 'bc') // returns true
 * solution('abc', 'd') // returns false
*/
const str1 = 'abc'
const ending1 = 'bc'

const str2 = 'cde'
const ednding2 = 'f'

function solution(str, ending) {
  const endOfStr = str.slice(str.length - ending.length);
  if (endOfStr === ending) {
    return true;
  } else {
    return false;
  }
}

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution(str1, ending1)) // true
console.log(solution(str2, ending2)) // false