//Given a Divisor and a Bound , Find the largest integer N , Such That ,
//N is divisible by divisor, N is less than or equal to bound, N is greater than 0.

const ex1 = [2, 7]; // 6
const ex2 = [3, 10]; // 9
const ex3 = [7, 17]; // 14
const ex4 = [10, 50]; // 50
const ex5 = [37, 200]; // 185
const ex6 = [7, 100]; // 98

function maxMultiple(divisor, bound) {
    for(let i = bound; i > 0; i--) {
        if(i % divisor === 0) {
            return i;
        }
    }
    return bound % divisor;
}

// METHOD 2
function maxMultiple(divisor, bound) {
    // get the remainder of bound / divisor, and subtract it from the divisor.
    return bound - (bound % divisor);
}


// METHOD 3
function maxMultiple(divisor, bound) {
    return Math.floor()
}
console.log(maxMultiple(ex5[0], ex5[1]));