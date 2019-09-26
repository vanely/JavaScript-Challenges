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
    // if the value of a property that is the current item in the array is greater that or equal to 0, then return an array with that value and the current index
    if (comp[nums[i]] >= 0) { 
      return [comp[nums[i]], i];
    }
    // add the target minus the current index value in to comp as a key and its vaule as the current index
    comp[target - nums[i]] = i;
  }
};

console.log('numArrOne', twoSum(numArrOne, targetOne));
console.log('numArrTwo', twoSum(numArrTwo, targetTwo));
console.log('numArrThree', twoSum(numArrThree, targetThree));

const comp = {
  7: 0,
}

[undefined, 0]
comp[9 - 2] = 0
