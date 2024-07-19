/**
 * https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
 * 
 * Your task is to find the first element of an array that is not consecutive.
 * By not consecutive we mean not exactly 1 larger than the previous element of the array.
 * E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
 * If the whole array is consecutive then return null2.
 * The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
 * If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
 * 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
 */

const testArr1 = [1, 2, 3, 4, 5, 6]; // null
const testArr2 = [1, 2, 3, 6, 7, 8, 12]; // 6
const testArr3 = [20, 21, 22, 23]; // null
const testArr4 = [];
const testArr5 = [7];

function firstNonConsecutive(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    const isConsecutive = arr[i + 1] === arr[i] + 1;
   
    if (isConsecutive) {
      continue;
    }
    if (!isConsecutive) {
      if (i === arr.length - 1) {
        return null;
      }
      return arr[i + 1];
    }
  }
}

console.log(firstNonConsecutive(testArr1));
console.log(firstNonConsecutive(testArr2));
console.log(firstNonConsecutive(testArr3));
console.log(firstNonConsecutive(testArr4));
console.log(firstNonConsecutive(testArr5));