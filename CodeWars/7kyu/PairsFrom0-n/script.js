// Write a function that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the condition
//
// 0 <= a <= b <= n
// The pairs should be sorted by increasing values of a, then by increasing values of b.
//
// For example,
//
const testNum = 2; // should return: [  [0, 0], [0, 1], [0, 2],  [1, 1], [1, 2],  [2, 2]  ]


function generatePairs(num) {
  const pairs = []
  let leadingNum = 0;
  for (let i = leadingNum; i <= num; i++) {
    for (let j = leadingNum; j <= num; j++) {
      pairs.push([i, j]); 
      if (j === num) {
        leadingNum += 1;
      }
    }
  }
  return pairs;
}

console.log(generatePairs(testNum));
