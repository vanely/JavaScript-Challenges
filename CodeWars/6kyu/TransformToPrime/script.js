// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript
// Task
// Given a list of positive integers, determine the minimum non-negative integer that needs to be inserted so that the sum of all elements becomes a prime number.
//
// Notes
// The list will always have at least 2 elements.
// All elements will be positive integers (n > 0).
// The list may contain duplicate values.
// The new sum must be the closest prime number that is greater than or equal to the current sum.
// Examples
// [3, 1, 2] ==> Should return 1  
// Explanation: The sum is 6
// The closest prime greater than or equal to 6 is 7
// We need to add 1 to make the sum 7 (a prime)
//
// [2, 12, 8, 4, 6] ==> Should return 5  
// Explanation: The sum is 32
// The closest prime greater than or equal to 32 is 37
// We need to add 5 to make the sum 37 (a prime)
//
// [50, 39, 49, 6, 17, 28] ==> Should return 2  
// Explanation: The sum is 189
// The closest prime greater than or equal to 189 is 191
// We need to add 2 to make the sum 191 (a prime)

const tests = [
  [[3,1,2],1],
  [[5,2],0],
  [[1,1,1],0],
  [[2,12,8,4,6],5],
  [[50,39,49,6,17,28],2],
]

function isPrime(num) {
  if (num <= 1 || num % 2 === 0) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  
  for (let i = 3; i < Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function minimumNumber(numbers){
  const sum = numbers.reduce((acc, curr) => acc+=curr ,0);
  const sumIsPrime = isPrime(sum);
  if (sumIsPrime) {
    return 0;
  }
  for (let i = 1; i < Math.sqrt(sum); i++) {
    const currentValueMakesPrime = isPrime(sum + i);
    if (currentValueMakesPrime) {
      return i;
    } 
  }
}

tests.forEach((test) => console.log(`is: ${minimumNumber(test[0])}, should be: ${test[1]}`));

