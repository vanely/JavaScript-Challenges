// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.
const num1 = 21; // 12
const num2 = 531; // 513
const num3 = 2071; // 2017
const num4 = 907; // 790

const newNum = 12;

// NOT EFFICIENT ENOUGH
function comparator(start, comp) {
  return start.toString().split('').sort((a, b) => a - b).join('') === comp.toString().split('').sort((a, b) => a - b).join('');
}

// optimization start flipping the last 2 numbers and checking if new num is less than starting num
function nextSmaller(n) {
  for (let i = n - 1; i > 0; i--) {
    if(i < n) {
      if(comparator(n, i)) {
        return i;
      }
    }
  }
  return -1;
}

// console.log(nextSmaller(num3));

//----------------------------------------------------------------------
// NOT EFFICIENT ENOUGH
function comparator(start, comp) {
  return start.toString().split('').sort((a, b) => a - b).join('') === comp.toString().split('').sort((a, b) => a - b).join('');
}

function swapLastTwo(n,) {
  const numArr = n.toString().split('');
  const lastTwo = numArr.slice(numArr.length - 2);

  numArr.splice(numArr.length - 2, 2, lastTwo.reverse().join(''));
  return Number(numArr.join(''));
}

function numSlice(num, indexFromEnd) {
  const numArr = num.toString().split('');
  return Number(numArr.slice(numArr.length - indexFromEnd).join(''));
}

function nextSmaller(n) {
  const digitCount = n.toString().split('').length;
  if ((n > 10) && (swapLastTwo(n) < n)) {
    if ((n > 100) && (swapLastTwo(n) < n)) {
      return swapLastTwo(n);
    }
    return swapLastTwo(n);
  }

  for (let i = 3; i <= digitCount; i++) {
    const newNum = numSlice(n, i);
    for (let j = newNum - 1; j > 0; j--) {
      if (j < newNum) {
        if (comparator(newNum, j)) {
          return j;
        }
      }
    }
  }
  return -1;
}

let splitStr = num3.toString().split('');
let lastTwo = splitStr.slice(splitStr.length - 2);
// console.log(splitStr);
splitStr.splice(splitStr.length - 2, 2, lastTwo.reverse().join(''))
console.log(nextSmaller(num4));
// console.log(numSlice(num3, 3));


