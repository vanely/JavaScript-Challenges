// A digital root is the recursive sum of all the digits in a
// number.Given n, take the sum of the digits of n.If that 
// value has two digits, continue reducing in this way until 
// a single - digit number is produced.This is only 
// applicable to the natural numbers.

const num1 = 16;
// digital_root(16)
// => 1 + 6
// => 7

const num2 = 942;
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

const num3 = 132189;
// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

const num4 = 93193;
// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {

    let numsArr = n.toString().split("");

    let rootNum = numsArr.reduce((acc, curr) => {
        return acc + Number(curr); 
    }, 0); 

    return rootNum < 10 ? rootNum : digital_root(rootNum);
}

console.log(digital_root(num3));