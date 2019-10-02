/** Given an array with n integers, your task is to check if it could become non - decreasing by modifying at most 1 element.
 *  We define an array is non - decreasing if array[i] <= array[i + 1] holds for every i(1 <= i < n).
 * 
 * Example 1:
 * nput: [4,2,3]
 * Output: True
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 * 
 * Example 2:
 * Input: [4,2,1]
 * Output: False
 * Explanation: You can't get a non-decreasing array by modify at most one element.
 * 
 * Note: The n belongs to [1, 10,000].
 */
 
/**
 * @param {number[]} nums
 * @return {boolean}
 */

const arr1 = [4, 2, 3];
const arr2 = [4, 2, 1];
const arr3 = [3, 6, 2, 7, 4, 7, 12, 1];
const arr4 = [1, 2, 3];
const arr5 = [-1, 4, 2, 3];
const arr6 = [3, 4, 2, 3];

const checkPossibility = (nums) => {
  let modifiableNums = 0;

  if (nums.length === 1) {
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] <= nums[i + 1]) && (nums[i] >= 1)) {
      modifiableNums++;
    }
  }

  if (modifiableNums === 1) {
    return true;
  } else if ((modifiableNums > 1) || (modifiableNums === 0)) {
    return false;
  } 
};

console.log(checkPossibility(arr6));