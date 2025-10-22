// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//
// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

const tests = [
  [[5,4,2,3], 22],
  [[12,6,10,26,3,24], 342],
  [[9,2,8,7,5,4,0,6], 74],
]

function minSum(arr) {
  const minimumProducts = [];
  const sortedArr = arr.sort((a,b) => a-b);
  for (let i = 0; i < sortedArr.length / 2; i++) {
    minimumProducts.push(sortedArr[i]*sortedArr[(sortedArr.length-1)-i]);
  }
  return minimumProducts.reduce((acc, curr) => acc += curr,0);
}

tests.forEach((test) => console.log(`is: ${minSum(test[0])}, should be: ${test[1]}`));
