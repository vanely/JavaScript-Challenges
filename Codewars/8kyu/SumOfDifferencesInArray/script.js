// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([2, 1, 10]) Returns 9
// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

const arr1 = [2, 1, 10]; // [10, 2, 1] (10 - 2) + (2 - 1) = 9
const arr2 = [-3, -2, -1]; // [-1, -2, -3] (-1 - (-2)) + (-2 - (-3)) = 2
const arr3 = [5];
const arr4 = [];

function sumOfDifferences(arr) {
  const subtractedArr = [];
  let sum = 0;

  if(!arr.length || arr.length === 1) {
    return 0;
  }

  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i] - arr[i + 1])) {
      subtractedArr.push(arr[i] - arr[i + 1]);
    }
  }
  for (let i = 0; i < subtractedArr.length; i++) {
    sum += subtractedArr[i];
  }

  return sum;
}

console.log(sumOfDifferences(arr2));
