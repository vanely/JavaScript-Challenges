// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
//
// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
//  2∗3=6
//
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
//  5∗10=50
//
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
//  −2∗7=−14

const tests = [
  [[5, 8], 40],
  [[1, 2, 3], 6],
  [[1, 5, 10, 9], 90],
  [[4, 12, 3, 1, 5], 48],
  [[5, 1, 2, 3, 1, 4], 6],

  [[3, 6, -2, -5, 7, 3], 21],
  [[9, 5, 10, 2, 24, -1, -48], 50],
  [[5, 6, -4, 2, 3, 2, -23], 30],
  [[-23, 4, -5, 99, -27, 329, -2, 7, -921], -14],
  [[5, 1, 2, 3, 1, 4], 6],

  [[1, 0, 1, 0, 1000], 0],
  [[1, 2, 3, 0], 6],
]

function adjacentElementsProduct(array) {
  let maxProduct = 0;
  for (let i = 0; i < array.length - 1; i++) {
    const currentProduct = array[i] * array[i+1];
    if (currentProduct > maxProduct || i === 0) {
      maxProduct = currentProduct;
    }
  }
  return maxProduct;
}

tests.forEach((test) => console.log(`is: ${adjacentElementsProduct(test[0])}, should be: ${test[1]}`));
