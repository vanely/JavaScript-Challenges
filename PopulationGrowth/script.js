// monitor growth of population
let p0 = 1500;
const percent = 5;
let dec = percent / 100;

const aug = 100; //(annual aditions)
const growthTo = 5000;
const expectYears = 15;

function nbYear(p0, percent, aug, p) {

    let count = 0;
    let rate = (p0 += p0 * dec + aug);
    let dec  = percent / 100;

    for(let i = p0; i <= p; i++) {
        p0 += p0 * dec + aug;
        count++;
        return p0 >= p ? count : null;
    }
}

let growth = 0;
let count = 0;
while(growth <= growthTo) {

    let rate = (p0 += p0 * dec + aug);
    growth += rate;
    count ++;
}
// console.log(2 / 100);
console.log(growth);
console.log(growth / growthTo);
console.log(count);

