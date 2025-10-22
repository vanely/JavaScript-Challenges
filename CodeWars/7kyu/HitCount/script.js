// https://www.codewars.com/kata/57b6f850a6fdc76523001162/train/javascript
// You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your company's software.
//
// You have been tasked with adding an effect to this counter to make it more interesting.
//
// Instead of just displaying the count value immediately when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.
//
//
//
// Task
// As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.
//
// Rules
// The function will take one argument which will be a four-character string representing hit count
// The function must return a multi-dimensional array containing four inner arrays of integers
// The final value in each inner array must be the actual value to be displayed
// Examples
const tests = {
  "1250": [ [0,1], [0,1,2], [0,1,2,3,4,5], [0] ],
  "0050": [ [0], [0], [0,1,2,3,4,5], [0] ],
  "0000": [ [0], [0], [0], [0] ],
  "7543": [ [0,1,2,3,4,5,6,7], [0,1,2,3,4,5], [0,1,2,3,4], [0,1,2,3] ],
  "3262": [ [0,1,2,3], [0,1,2], [0,1,2,3,4,5,6], [0,1,2]],
  "4004": [ [0,1,2,3,4], [0], [0], [0,1,2,3,4]],
}

function counterEffect(hitCount) {
  return Array.from(hitCount).map((digit) => Array.from({length: Math.ceil((parseInt(digit)+1)), }, (_, i) => i));
}

function cyclingCounterEffect(hitCount) {
  const digitCounter = counterEffect(hitCount);
  let counter = '0000';
  let counterIndex = 0;
  const counterInterval = setInterval(() => {
    if (counter[0] === '0') {
      process.stdout.write(`\rHappy Customers: ${counter}`);
    }
    const counterArr = counter.split('');
    const currentCounterDigit = parseInt(counterArr[counterIndex]);
    const nextValue = currentCounterDigit + 1;
    counterArr.splice(counterIndex, 1, nextValue);
    counter = counterArr.join('');
    process.stdout.write(`\rHappy Customers: ${counter}`);
    if (counterIndex === digitCounter.length - 1 && parseInt(counter.charAt(counterIndex)) === digitCounter[counterIndex].length - 1) {
      clearInterval(counterInterval);
    }
    if (parseInt(counter.charAt(counterIndex)) === digitCounter[counterIndex].length - 1) {
      counterIndex += 1;
    }
  }, 100);
}

cyclingCounterEffect('7543');

// Object.keys(tests).forEach((test) => console.log(`is: ${JSON.stringify(counterEffect(test), 2, null)}\nshould be: ${JSON.stringify(tests[test], 2, null)}`));
