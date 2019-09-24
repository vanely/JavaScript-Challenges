/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const numArrOne = [2, 7, 11, 8, 14, 6], targetOne = 9; // [0, 1]
const numArrTwo = [3, 4, 2, 8, 15, 20], targetTwo = 6; // [1, 2]
const numArrThree = [16, 22, 7, 4, 8], targetThree = 12; // [3, 4]
const numArrFour = [2, 5, 5, 6, 11], targetFour = 10; // [1, 2]
const numArrFive = [3, 3], targetFive = 6; // [0, 1]

// missing duplicate index check
const twoSum = (nums, target) => {
  const out = [];
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i];
    if (nums.includes(dif)) {
      out.push(i, nums.indexOf(dif));
      return out;
    }
  }
};

console.log('numArrOne', twoSum(numArrOne, targetOne));
console.log('numArrTwo', twoSum(numArrTwo, targetTwo));
console.log('numArrThree', twoSum(numArrThree, targetThree));