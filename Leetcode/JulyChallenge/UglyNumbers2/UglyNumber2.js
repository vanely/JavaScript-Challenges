/**
 * https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3380/
 * Write a program to find the n-th ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 * 
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const uglyNumbers = {};
  for (let i = 1; i < n; i++) {
    if (i === 1) {
      uglyNumbers[i] = i;
    }


  }
};
