/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const numArrOne = [2, 7, 11, 8, 14, 6], targetOne = 9; // [0, 1]
const numArrTwo = [3, 4, 2, 8, 15, 20], targetTwo = 6; // [1, 2]
const numArrThree = [16, 22, 7, 4, 8], targetThree = 12; // [3, 4]

const twoSum = (nums, target) => {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i]
    }
    comp[target - nums[i]] = i
  }
};

console.log('numArrOne', twoSum(numArrOne, targetOne));
console.log('numArrTwo', twoSum(numArrTwo, targetTwo));
console.log('numArrThree', twoSum(numArrThree, targetThree));