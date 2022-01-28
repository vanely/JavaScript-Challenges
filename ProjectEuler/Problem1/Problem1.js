/**
 * Multiples of 3 and 5
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
*/

const range0 = 50;
const range1 = 100;
const range2 = 1000;
const range3 = 10000;
const range4 = 100000;


function sumOfMultiplesOfThreeAndFive(range) {
  const multiples = [];
  for (let i = 3; i < range; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  return multiples.reduce((acc, value) => {
    return acc += value;
  }, 0);
}

console.log(sumOfMultiplesOfThreeAndFive(range2));