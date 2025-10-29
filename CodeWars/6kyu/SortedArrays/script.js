// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.
//
// All the arguments except the last will be arrays, the last argument is n.
//
// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
// Be mindful of performance.

const tests = [
  [[[2, 4, 6, 8, 10, 12]], 5, 10],
  [[[2, 2, 2, 2, 2]], 3, 2],
  [[[2, 8, 12], [4, 6, 10]], 5, 10],
  [[[1, 5], [2], [4, 8, 9]], 4, 5],
  [[[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7, 7],
]

function nthSmallest(...args) {
  const pos = arguments[arguments.length - 1];
  const flatArr = [...arguments].reduce((acc, curr, index)=> index !== arguments.length - 1 ? acc.concat(curr) : acc.concat([]), []).sort((a,b)=>a-b);
  return flatArr[pos - 1];
}

tests.forEach((test) => console.log(`is:${nthSmallest(...test[0], test[1])}, should be: ${test[2]}`));

