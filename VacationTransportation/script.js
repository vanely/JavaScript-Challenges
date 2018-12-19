//method 1
function rentalCarCost(d) {
    let sum = 0;
    const rentalCost = 40;
    
    for(let i = 1; i <= d; i++) {
        sum += rentalCost;
    }
    if(d >= 7) {
        return (sum -= 50);
    }
    else if(d >= 3) {
        return (sum -= 20);
    }
    return sum;
}

//refactor
function rentalCarCost2(d) {
    const rentalCost = 40;
    let sum = 0;
    return d >= 7 ? sum = d * rentalCost - 50
    : d >= 3 ? sum = d * rentalCost -20
    : sum  = d * rentalCost;
}
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));