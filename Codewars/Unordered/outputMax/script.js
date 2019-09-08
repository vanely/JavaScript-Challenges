const values = [10, 20, 30, 40, 50];

//es5 approach
let max1 = Math.max.apply(Math, values);

//es6 approach
let max2 = Math.max(...values);

console.log(max1);
console.log(max2);
