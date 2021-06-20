/**
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
*/

const arr1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
const arr2 = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
const arr3 = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]
const arr4 = [10];
const arr5 = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];
const arr6 = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];

function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }

  let oddOccurance;
  const numCount = A.reduce((acc, num) => {
    if (num in acc) {
      acc[num]++;
    } else {
      acc[num] = 1;
    }
    return acc;
  }, {});

  Object.keys(numCount).forEach((num) => {
    if (numCount[num] % 2 !== 0) {
      oddOccurance = num;
    }
  });

  return parseInt(oddOccurance);
}

console.log(findOdd(arr1));
console.log(findOdd(arr2));
console.log(findOdd(arr3));
console.log(findOdd(arr4));
console.log(findOdd(arr5));
console.log(findOdd(arr6));


///////////////////////////////////////////////

function findOdd2(arr) {
  const obj = {}
  arr.forEach((num) => {
    obj[num] ? obj[num]++ : obj[num] = 1;
  })

  for (num in obj) {
    if (obj[num] % 2 !== 0) return Number(num);
  }
}

console.log(findOdd2(arr1));
console.log(findOdd2(arr2));
console.log(findOdd2(arr3));
console.log(findOdd2(arr4));
console.log(findOdd2(arr5));
console.log(findOdd2(arr6));
