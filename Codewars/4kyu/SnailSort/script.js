/**
 * Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
 *
 * array = [[1,2,3],
 *          [8,9,4],
 *          [7,6,5]]
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]
 *
 * @param {array} - arr 
 * @return {array}
 */

const array1 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
]; // [1,2,3,4,5,6,7,8,9]

const array2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]; // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

// maybe try a solution maybe a recursive one that solves this with slices of the array
function snail(arr) {
  const returnArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let indexOfInternalArray = arr[i].indexOf(arr[i][j]);
      let lengthOfInternalArray = arr[i].length - 1;
      returnArray.push(arr[i][j]);
      if (indexOfInternalArray === lengthOfInternalArray) {
        i += 1; // may not need to do this
        j = 2;
        returnArray.push(arr[i][j])
      }
    }
    if ((i === arr.length - 1) && ((returnArray.length === arr[0].length * 2) - 1)) {
      i = arr.length - 2;
      // continue;
      return returnArray;
    }
  }
}

function checkIfAtEnd() {

}

console.log(snail(array1));
console.log(snail(array2));