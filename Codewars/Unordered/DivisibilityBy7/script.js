/*A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible or not by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.*/


const ex1 = 371; //[35, 1]
const ex2 = 1603; //[7, 2]
const ex3 = 483; //[42, 1]
const ex4 = 477557101; //[28, 7]

function seven(m) {
    let divAndIter = []; //dividend and iterations
    let counter = 1; //num of steps
    let newNewBase = null;
    let newBase = checkInt(m)[0]; //num after a step is complete
    let lastNum = checkInt(m)[1]; //last digit from end of m
    
    //check if last num * 2 gives us a 2 digit num divisible by 7
    while(newBase > 10) {
        if(newBase > 99 || newBase % 7 !== 0) {
            newBase = checkInt(newBase)[0];
            lastNum = checkInt(newBase)[1];
            console.log(newBase);
            console.log(lastNum);
            newNewBase = newBase - (2 * lastNum);
            newBase = newNewBase;

            counter++;
            console.log(counter);
            continue;
        }
        //check for 2 digit, 7 divisibility
        //if above conditional is false
        divAndIter.push(newBase, counter);
        return divAndIter;
    }


    //method to check if num is greater than 99
    function checkInt(num) {
        let extractedNums = [];
        let newNum = num;
        let takenNum = 0;
        let strArrNum = num.toString().split('');

        takenNum = Number(strArrNum.pop());
        newNum = Number(strArrNum.join(''));
        extractedNums.push(newNum, takenNum);
        
        return extractedNums;
    }
}

console.log(seven(ex2));