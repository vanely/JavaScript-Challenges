// https://www.codewars.com/kata/52f677797c461daaf7000740/train/javascript

//Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:
// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

// For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

const X_1 = [6, 9, 12] // # -> X_1[2] = X[2] - X[1] = 21 - 9
const X_2 = [6, 9, 6]  // # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
const X_3 = [6, 3, 6]  // # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
const X_4 = [6, 3, 3]  // # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
const X_5 = [3, 3, 3]  // # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3

function solution(numbers) {
    for(let i = numbers.length - 1; i >= 0; i--) {
        for(let j = numbers.length - 2; j >= 0; j--) {
            
        }
    }
}
console.log(solution(X_1))