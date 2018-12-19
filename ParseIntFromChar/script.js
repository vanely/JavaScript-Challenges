const age1 = "4 years old"; //4
const age2 = "5 years old"; //5
const age3 = "9 years old"; //9
const age4 = "1 year old"; //1


//return the number in the string
function getAge(inputString) {

    return Number(inputString.replace(/\D/g, ''));
}

//method 2
function getAge2(inputString) {
    return parseInt(inputString);
}

// console.log(getAge(age2));
console.log(getAge2(age1));