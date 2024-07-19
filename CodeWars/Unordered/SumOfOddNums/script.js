let oddSum = 0;
let oddArr = [];
for(let i = 1; i < 80; i++)
{
    i % 2 !== 0 ? oddSum += i : null;
}

console.log(oddSum);