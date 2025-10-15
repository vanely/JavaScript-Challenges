// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.
//
// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]
//
// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]
//
// [1] --> 0
// []  --> 0

const tests = [
  [[4, 8, 6], 2],
  [[1, 2, 3, 4], 0],
  [[], 0],
  [[1], 0],
  [[ 59, 4, -34, -52 ], 108],
]

function consecutive(array) {
  if (array.length <= 1) {
    return 0;
  }
  let numsNeededForConsecutive = 0;
  const sortedArr = array.sort((a, b) => a - b);
  console.log(`sorted: ${sortedArr}`);
  for (let i = 0; i < sortedArr.length; i++) {
    const nextValue = sortedArr[i + 1];
    if (i !== sortedArr.length - 1) {
      if ((sortedArr[i] + 1) !== nextValue) {
        numsNeededForConsecutive = numsNeededForConsecutive + ((nextValue - sortedArr[i]) - 1);
      }
    }
  }
  return numsNeededForConsecutive;
}

tests.forEach((test) => {
  console.log(`is: ${consecutive(test[0])}, should be: ${test[1]}`);
})
