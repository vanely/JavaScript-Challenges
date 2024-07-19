const bin = [0, 0, 0, 1];

//method 1
let binaryConversion = (binArr) => {
    //integer value
    let intVal = 0;
    //array of generated numbers that represent the binary values
    let binVal = [0, 1];
    //adds binary values to the binary array
    for(let i = 2; i < binArr.length; i) {
        binVal.push(i);
        // console.log();
        console.log(binVal);
    }
    //if value in binary array is 1 replace it for the same index value in the binVal array
    for(let j = 0; j < binArr.length; j++) {
        if(binArr[j] === 1) {
            binArr[j] = binVal[binArr[j]];
        }
        intVal += binArr[j];
    }
    return intVal;
}

//method and converts it to a 
//parseInt() takes a string number and a radix, and converts the number into the base radix. 2 is binary
const binaryArrayToNumber = arr => {
    return parseInt(arr.join('').toString(), 2);
};

console.log(binaryConversion(bin));
console.log(binaryConversion(bin));

