// Given an array of numbers, return a string made up of four parts:

// a) a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

// b) the same as above, post sorting the array into ascending order,

// c) the same as above, post sorting the array into descending order,

// d) the same as above, post converting the array into ASCII characters and sorting alphabetically.

// The four parts should form a single string, each part separated by a hyphen: '-'

// example format of solution: 'asdf-tyui-ujng-wedg'

const arr1 = [121, 122, 123, 124, 125, 120, 122, 132];
const arr2 = [111, 112, 113, 114, 115, 113, 114, 110];
const arr3 = [51, 62, 73, 84, 95, 100, 99, 126];

function sortTransform(a) {

    let charArr = [];

    //step1
    charArr[0] = firstAndLastTwo(a).map((index) => {
        return String.fromCharCode(index);  
    }).join("");

    //step2
    charArr[1] = firstAndLastTwo(sortArr(a)).map((index) => {
        return String.fromCharCode(index);
    }).join("");

    //step3
    charArr[2] = firstAndLastTwo(sortArr(a, true)).map((index) => {
        return String.fromCharCode(index);
    }).join("");
    
    charArr[3] = firstAndLastTwo(a).map((index) => {
        return String.fromCharCode(index);
    }).sort().join("");

    return charArr.join("-");
}   

//take out first and last 2 eements of an array
function firstAndLastTwo(arr) {
    return [arr[0], arr[1], arr[arr.length - 2], arr[arr.length - 1]];
}

//sort array, and if secod arg is true, than array is reversed
function sortArr(arr, reverse=false) {

    if(reverse) {
        return arr.sort().reverse();
    }

    return arr.sort();
}

// function collector()

// console.log(sortArr(arr1));
console.log(sortTransform(arr1));