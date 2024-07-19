const startEnd1 = [1, 4];
const startEnd2 = [5, 12];
const startEnd3 = [5, 8];
const startEnd4 = [3, 15];
const startEnd5 = [6, 100000000];

// function between(a, b) {
//     // create fixed array whose size is the difference between a and b plus 1 to inculde both numbers.
//     // then fill array with with index plus starting number.
//     return new Array(b-a+1).map((_,index) => {
//         return a + index;
//     });
// }
// // console.log(between())

function between(a, b) {
    return new Array(b-a+1).fill().map((_, index) => index + a);
}

console.log(between(startEnd5[0], startEnd5[1]));