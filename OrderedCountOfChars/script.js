// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

const str1 = "abracadabra"; // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
const str2 = "Code Wars"; // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]]
const str3 = "212"; //  [['2', 2], ['1', 1 ]]]

let orderedCount = function (text) {
  // iterate through text and count char occurances (reduce)
  const uniqueChars = [];
  const countTuples = [];

  // if(!isNaN(text)) {
    for (let i = 0; i < text.length; i++) {
      if (!uniqueChars.includes(text[i])) {
        uniqueChars.push(text[i]);
      } else {
        continue;
      }
    }

    for (let i = 0; i < uniqueChars.length; i++) {
      countTuples.push([]);
    }

    for (let j = 0; j < text.length; j++) {
      // if index 0 of i-th array === j-th character in text
      if (countTuples[i][0] === text[j]) {
        countTuples[i][1]++;
      } else {
        countTuples[i].push(text[i], 1);
        continue;
      }
    }

  // } else {
  //   const countObj = text.split('').reduce((acc, char) => {
  //     if (char in acc) {
  //       acc[char]++;
  //     } else {
  //       acc[char] = 1; 
  //     }
  //     return acc;
  //   }, {});
  
  //   for (let i = 0; i < Object.keys(countObj).length; i++) {
  //     countTuples.push([Object.keys(countObj)[i], Object.values(countObj)[i]]);
  //   }
  // }
  console.log(countTuples);
  return countTuples;
}

// const word = 'word';
// const newArr = [];
// for (let i = 0; i < word.length; i++) {

//   newArr.push([]);
// }
// console.log('newArr', newArr);

const uniqueChars = [];
const countTuples = [];


str1.split('').forEach((char) => {
  !uniqueChars.includes(char) ? uniqueChars.push(char) : null;
});

uniqueChars.forEach((char) => {
  countTuples.push([char, 0]);
});

// single letter in array can be turned into array via split methos
for (let i = 0; i < countTuples.length; i++) {
  for (let j = 0; j < str1.length; j++) {
    // if index 0 of i-th array === j-th character in str1
    if (countTuples[i][0] === str1[j]) {
      countTuples[i][1]++;
    } else {
      continue;
    }
  }
}



console.log(countTuples);

// orderedCount(str3);