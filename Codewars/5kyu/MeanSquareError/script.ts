/**
 * Example arrays
 */
const arr1: number[] = [1, 2, 3]; // expected output 9 because (9 + 9 + 9) / 3
const arr2: number[] = [4, 5, 6];

const arr3: number[] = [10, 20, 10, 2]; // expected output 16.5 because (0 + 25 + 25 + 16) / 4
const arr4: number[] = [10, 25, 5, -2];

const arr5: number[] = [-1, 0]; // expected output 1 because (1 + 1) / 2
const arr6: number[] = [0, -1];


function meanSquareError(arr1: number[], arr2: number[]): number {
  const finalArr: number[] = []

  if (arr1.length === arr2.length) {
    arr1.forEach((num, i) => {
      finalArr.push(Math.abs(num - arr2[i]) ** 2);
    })

    return finalArr.reduce((acc, num) => acc += num, 0) / finalArr.length;
  }
  return 0;
}

console.log(meanSquareError(arr1, arr2))
console.log(meanSquareError(arr3, arr4))
console.log(meanSquareError(arr5, arr6))