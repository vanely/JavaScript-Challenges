
const num = 9119;

function squareDigits(num){
    let strNum = num.toString().split('');

    let sqr1 = [];    
    for(let i = 0; i < strNum.length; i++) {
        sqr1.push(Math.pow(Number(strNum[i]), 2).toString());
    }
    return Number(sqr1.join(''));
}

console.log(squareDigits(num));

// let strNum = num.toString().split('');


// let sqr2 = [];
// for(let i = 0; i < strNum.length; i++) {
//     sqr1.push(Math.pow(Number(strNum[i]), 2).toString());
//     sqr2.push((Number(strNum[i]) ** 2).toString());
// }

// console.log(strNum);
// console.log(Number(sqr1.join('')));
// console.log(Number(sqr2.join('')));
