const BigNumber = require('bignumber.js')
// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969 (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n  
// lastDigit(10n,10000000000n)  // returns 0n

const testPairs = [ 
  [2n, 10n, 4n],
  [4n, 1n, 4n],
  [4n, 2n, 6n],
  [9n, 7n, 9n],
  [10n, 10000000000n, 0n],
]

function lastDigit(n, m) {  
  if (n <= 0n || m <= 0n) {
    return 1n;
  }

  const binaryMod = BigInt(10);
  let base = BigInt(n);
  let exponent = BigInt(m);
  let result = 1n;
  base = base % binaryMod;

  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % binaryMod;
    }
    base = (base * base) % binaryMod;
    exponent = exponent / 2n
  }
  return result;
}


// function lastDigit(base, exponent) { let result = 1n; const modulus = 10n;
//   base = base % modulus; 
//
//   // Binary exponentiation with modular reduction
//   while (exponent > 0n) {
//     // If exponent is odd, multiply result by base
//     if (exponent % 2n === 1n) {
//       result = (result * base) % modulus;
//     }
//
//     // Square the base and reduce modulo
//     base = (base * base) % modulus;
//
//     // Divide exponent by 2 (right shift in binary)
//     exponent = exponent / 2n;
//   }
//
//   return result;
// }

for (let i = 0; i < 5; i++) {
  console.log(`is: ${lastDigit(testPairs[i][0], testPairs[i][1])}, should be: ${testPairs[i][2]}`);
}
