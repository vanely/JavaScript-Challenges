let arr1 = [7, 4, 9, 12, 3, 15, 5];
let arr2 = [10, 1, 8, 6, 15, 13, 17];
const target = 20;

/** return 2 nums each from differnt array whose sum is target
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} target
 * @return {number[]}
 */
function binarySearchSum(arr1, arr2, target) {

  let sumIndices = [];
  
  /** sort function for array
   * @param {number[]} arr
   */
  function sortArr(arr) {

    arr.sort((a, b) => a - b);
  }
  
  /** splice array from some index to some index
   * @param {number[]} arr
   * @param {number} start
   * @param {number} end
   */
  function sliceArrInHalf(arr, start, end) {
    
    arr = arr.splice(start, end);
  }

  sortArr(arr1);
  sortArr(arr2);

  //iterate over array applying binary search
  for (let i = 0; i < arr1.length; i++) {

    let arrLen1 = (arr1.length - 1);
    let arrLen2 = (arr2.length - 1);

    //test sum at half using binary search
    if (arr1[Math.floor(arrLen1 / 2)] + arr2[Math.floor(arrLen2 / 2)] < target) {

      console.log(arr1[Math.floor(arrLen1 / 2)] + arr2[Math.floor(arrLen2 / 2)]);
      arr1 = arr1.splice(Math.floor(arrLen1 / 2));
      arr2 = arr2.splice(Math.floor(arrLen2 / 2));
    } else if (arr1[Math.floor(arrLen1 / 2)] + arr2[Math.floor(arrLen2 / 2)] > target) {
      console.log(arr1[Math.floor(arrLen1 / 2)] + arr2[Math.floor(arrLen2 / 2)]);

      arr1 = arr1.splice(0, Math.floor(arrLen1 / 2));
      arr2 = arr2.splice(0, Math.floor(arrLen2 / 2));
    } else {

      console.log(arr1[Math.floor(arrLen1 / 2)] + arr2[Math.floor(arrLen2 / 2)]);
      return [arr1[Math.floor(arrLen1 / 2)], arr2[Math.floor(arrLen2 / 2)]];
    }
  }

  sumIndices.push(arr1[Math.floor(arrLen1 / 2)] + arr2[Math.floor(arrLen2 / 2)]);
  return sumIndices;
}

console.log(binarySearchSum(arr1, arr2, target));