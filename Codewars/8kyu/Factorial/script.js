const num1 = 5;
const num2 = 10;
const num3 = 15;
const num4 = 20;
const num5 = 25;
const num6 = 30;
const num7 = 35;

function fact(n) {
  if(n < 1) {
    return 1;
  }
  console.log(n * fact(n - 1));
  return n * fact(n - 1);
}

// console.log(fact(num1));
// console.log(fact(num2));
// console.log(fact(num3));
// console.log(fact(num5));
// console.log(fact(num6));
// console.log(fact(num7));
// console.log(fact(num4));

function div(n) {
  return Math.floor(n / 5);
}

console.log(div(18));