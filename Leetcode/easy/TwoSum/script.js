/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const numArrOne = [2, 7, 11, 8, 14, 6]; // 9
const numArrTwo = [3, 4, 2, 8, 15, 20]; // 6
const numArrThree = [16, 22, 7, 4, 8]; // 12

const twoSum = function (nums, target) {
    const output = [];
    let indexCount = 0
    let selectedNum = nums[indexCount];

    for(let i = 0; i < nums.length; i++) {
        if ((selectedNum + nums[i] === target) && (selectedNum !== nums[i])) {
            output.push(selectedNum, i);
            break;
        }
        // can't happen in loop, incrementation will always happen
        if ((output.length === 0) && (i === nums.length - 1)) {
            i = 0;
            indexCount++;
        }
    }
    return output;
};

// function looper(start, select, nums, target) {
//     for (let i = start; i < nums.length; i++) {
//         if () {

//         }
//     }
// }

console.log(twoSum(numArrOne, 9));