// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

const str1 = "abracadabra"; // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
const str2 = "Code Wars"; // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]]
const str3 = "212"; //  [['2', 2], ['1', 1 ]]]

let orderedCount = function (text) {
  // iterate through text and count char occurances (reduce)
  const countTuples = [];

  // if(!isNaN(text)) {
    for (let i = 0; i < text.length; i++) {
      countTuples.push([]);
      if (countTuples[i][0] === text[i]) {
        countTuples[i][1]++;
      } else {
        countTuples[i].push(text[i], 1);
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
orderedCount(str3);