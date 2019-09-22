/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const output = [];
    let indexCount = 0
    let selectedNum = nums[indexCount];

    nums.forEach((num, index) => {
        if ((selectedNum + num === target) && (selectedNum !== num)) {
            output.push(indexCount, index);
        }

        if (output.length === 0) {
            indexCount++;
        } else {
            return output;
        }
    });
};