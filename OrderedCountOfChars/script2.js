// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

const str1 = "abracadabra"; // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
const str2 = "Code Wars"; // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]]
const str3 = "212"; //  [['2', 2], ['1', 1 ]]]


// METHOD 1
let orderedCount = function (text) {
  const uniqueChars = [];
  const countTuples = [];

  text.split('').forEach((char) => {
    !uniqueChars.includes(char) ? uniqueChars.push(char) : null;
  });

  uniqueChars.forEach((char) => {
    countTuples.push([char, 0]);
  });

  for (let i = 0; i < countTuples.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (countTuples[i][0] === text[j]) {
        countTuples[i][1]++;
      } else {
        continue;
      }
    }
  }

  return countTuples;
}

// console.log(orderedCount(str3));
console.log('a: ', str1.split('a').length - 1);
console.log('b: ', str1.split('b').length - 1);
console.log('r: ', str1.split('r').length - 1);
console.log('c: ', str1.split('c').length - 1);
console.log('d: ', str1.split('d').length - 1);


// METHOD 2
const orderedCount2 = s => // runs check for availability to increment or append 1 in set param
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));


// METHOD 3
// str.split(char).length - 1 returns the number of times said character occurs in string
const orderedCount3 = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])
