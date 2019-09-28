const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const arrB = arr.slice(0, arr.length / 2);
const arrC = arr.slice(arr.length / 2);

let arrBsum = arrB.reduce((acc, num) => {
  return acc + num;
}, 0);

let arrCsum = arrC.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log('arrBsum: ', arrBsum / arrB.length);
console.log('arrCsum: ', arrCsum / arrC.length);

console.log('arrB: ', arrB);
console.log('arrC: ', arrC);