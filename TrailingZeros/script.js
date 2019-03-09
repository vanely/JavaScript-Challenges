let testNum = 30;

//Verbose approach
function zeros(n) {
    let zeroCount = 0;
    let numToStr = n.toString();

    for (let i = numToStr.length - 1; i > 0; i--){
        if(numToStr[i] === '0'){
            zeroCount++;
        }
        else {
            break;
        }
    }
    return zeroCount;
}

function factorial(n) {

    if(n === 0) {
      return 0;
    }
    else if(n === 1) {
      return 1;
    }
  
    return n * factorial(n - 1);
}



//rule of factorial divisibility by 5
function zeros(n){
  return Math.floor(n / 5);
}
console.log(`Factorial: ${factorial(testNum)}`);
console.log(`Trailing zeros: ${zeros(factorial(testNum))}`);