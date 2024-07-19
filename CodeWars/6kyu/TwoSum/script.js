// Write a function that takes an array of numbers(integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value. 
// The indices of these items should then be returned in a tuple / list(depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid(numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: https://leetcode.com/problems/two-sum/

//    numbers                              target                   valid results
const exampleOne    = [1, 2, 3],          targetOne   = 4      // ((0, 2), (2, 0))
const exampleTwo    = [1234, 5678, 9012], targetTwo   = 14690  // ((1, 2), (2, 1))
const exampleThree  = [2, 2, 3],          targetThree = 4      // (0, 1), (1, 0))
const exampleFour   = [3, 2, 4],          targetFour  = 6      // ((1, 2), (2, 1))

function subtractVals(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}


function twoSum(numbers, target) {
  const numToIndex = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const possibleMatch = target - numbers[i];
    if (numToIndex.has(possibleMatch)) {
      return [numToIndex.get(possibleMatch), i];
    }
    numMap.set(numbers[i], i);
  }
  return [];
}

function twoSum(numbers, target) {
  const numToIndex = new Map();

  for (let i = 0; i < numbers.length; i++) {
    numToIndex.set(nums[i], i);
  }

  for (let i = 0; i < numbers.length; i++) {
    const possibleMatch = target - numbers[i];
    if (numToIndex.has(possibleMatch) && numToIndex.get(possibleMatch) !== i) {
      return [numToIndex.get(possibleMatch), i];
    }
    numMap.set(numbers[i], i);
  }
  return [];
}

console.log(`results for example 1: ${twoSum(exampleOne, targetOne)}`);
console.log(`results for example 1: ${twoSum(exampleTwo, targetTwo)}`);
console.log(`results for example 1: ${twoSum(exampleThree, targetThree)}`);
console.log(`results for example 1: ${twoSum(exampleFour, targetFour)}`);