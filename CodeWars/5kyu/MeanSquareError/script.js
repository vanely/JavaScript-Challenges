/**
 * Example arrays
 */
var arr1 = [1, 2, 3]; // expected output 9 because (9 + 9 + 9) / 3
var arr2 = [4, 5, 6];
var arr3 = [10, 20, 10, 2]; // expected output 16.5 because (0 + 25 + 25 + 16) / 4
var arr4 = [10, 25, 5, -2];
var arr5 = [-1, 0]; // expected output 1 because (1 + 1) / 2
var arr6 = [0, -1];
function meanSquareError(arr1, arr2) {
    var finalArr = [];
    if (arr1.length === arr2.length) {
        arr1.forEach(function (num, i) {
            finalArr.push(Math.pow(Math.abs(num - arr2[i]), 2));
        });
        return finalArr.reduce(function (acc, num) { return acc += num; }, 0) / finalArr.length;
    }
    return 0;
}
console.log(meanSquareError(arr1, arr2));
console.log(meanSquareError(arr3, arr4));
console.log(meanSquareError(arr5, arr6));
