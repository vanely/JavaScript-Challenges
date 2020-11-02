/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Note:
 * Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 * 
 * Example 4:
 * Input: x = 0
 * Output: 0
 */

const testValue1 = 123;
const testValue2 = -123;
const testValue3 = 120;
const testValue4 = 0;

/** 
* Solution for reversing a number.
* @param {number} num - Number that will be reversed.
* @return {number} Reversed number.
*/
function solution(num) {
  if (!isOverflow(num)) {
    const reversedNumArray = num.toString().split('').reverse();
    if (reversedNumArray[reversedNumArray.length - 1] === '-') {
      reversedNumArray.pop();
      if (!isOverflow(Number(reversedNumArray.join('')))) {
        return Number(`-${reversedNumArray.join('')}`);
      }
    } else if (!isOverflow(Number(reversedNumArray.join('')))) {
      return Number(reversedNumArray.join(''));
    }
  }
  return 0;
}

// maybe write out a solution that doesn't utilize built in methods

/**
 * Checks if a number overflows beyond a 32bit integer range.
 * @param {number} num - Number to be checked.
 * @return {bool}
 */
function isOverflow(num) {
  return (num > 2 ** 31) || (num < -(2 ** 31) - 1);
}


console.log(solution(testValue1));
console.log(solution(testValue2));
console.log(solution(testValue3));
console.log(solution(testValue4));
