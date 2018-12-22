// Given two integers a and b, which can be positive or 
//negative,find the sum of all the numbers between including 
//them too and return it. If the two numbers are equal return //a or b.

// GetSum(1, 0) == 1 // 1 + 0 = 1
// GetSum(1, 2) == 3 // 1 + 2 = 3
// GetSum(0, 1) == 1 // 0 + 1 = 1
// GetSum(1, 1) == 1 // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2

function GetSum(a, b) {

    let emp = [];

    if (a === b) {
        return a;
    }
    if (a > b) {
        return a + b;
    }

    for(let i = a; i <= b; i++) {
        emp.push(i);
    }

    let sum = emp.reduce((acc, curr) => {
        return acc + curr;
    },0);

    return sum;
}

console.log(GetSum(-1, 0));