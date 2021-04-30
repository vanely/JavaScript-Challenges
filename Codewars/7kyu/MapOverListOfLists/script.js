// https://www.codewars.com/kata/606b43f4adea6e00425dff42/train/javascript
// Write a function which maps a function over the lists in a list:

/**
* Ex1:
* 
* const twoDimArr = [
*   [1, 2, 3],
*   [4, 5, 6]  
* ]
*
* gridMap((x) => x + 1, arr) => [[2, 3, 4], [5, 6, 7]]
* gridMap((x) => x ** 2, arr) => [[1, 4, 9], [16, 25, 36]]
* 
* Ex2:
* 
* const otherTwoDimArr = [
*   ['h', 'E', 'l', 'l', 'O'],
*   ['w', 'O', 'r', 'L', 'd']  
* ]
* 
* gridMap((x) => x.toUpperCase(), arr) => [['H', 'E', 'L', 'L', 'O'], ['W', 'O', 'R', 'L', 'D']]
*/

const twoDimArr = [
  [1, 2, 3],
  [4, 5, 6]  
]

const otherTwoDimArr = [
  ['h', 'E', 'l', 'l', 'O'],
  ['w', 'O', 'r', 'L', 'd']  
]

/** 
* Map a function to elements 2 dimensions deep in an array
* @param {Function} fn - Function to be mapped to array methods.
* @param {Array} a - Array whose elements fn will be mapped to.
* @return {any[][]} Two dimensional array with modified values.
*/
function gridMap(fn, a) {
  // can use (return a.map(a2 => a2.map(fn)))
  let outArr = [];
  a.forEach((internalArr) => outArr.push(internalArr.map(fn)))
  return outArr;
}

/** 
* Vanilla implementation for mapping a function to elements 2 dimensions deep in an array
* @param {Function} fn - Function to be mapped to array methods.
* @param {Array} a - Array whose elements fn will be mapped to.
* @return {any[][]} Two dimensional array with modified values.
*/ 
function vanillaGridMap(fn, a) {
  let outArr= [];
  for (let i = 0; i < a.length; i++) {
    let internalArr = [];
    for (let j = 0; j < a[i].length; j++) {
      internalArr.push(fn(a[i][j]));
    }
    outArr.push(internalArr);
  }
  return outArr;
}

console.log("Grid Map: ", gridMap((x) => x**2, twoDimArr))
console.log("Vanilla Grid Map: ", vanillaGridMap((x) => x**2, twoDimArr))