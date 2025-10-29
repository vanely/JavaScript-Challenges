// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
//
// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.
//
// Examples
// [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 
// 13+49=62 and the total weight of team 2 is 27.
//
// [50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language) because the total weight of team 1 is 
// 50+70=120 and the total weight of team 2 is 60+80=140.
//
// [80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is 80 and the total weight of team 2 is 0.

const tests = [
  [[80], [80,0]],
  [[100,50], [100,50]],
  [[50,60,70,80], [120,140]],
  [[13,27,49], [62,27]],
  [[70,58,75,34,91], [236,92]],
  [[29,83,67,53,19,28,96], [211,164]],
  [[100,51,50,100], [150,151]],
  [[39,84,74,18,59,72,35,61], [207,235]],
]

function rowWeights(array) {
  if (array.length === 1) {
    return [array[0],0];
  }
  if (array.length === 2) {
    return array;
  }
  let teamOneTotalWeight = 0;
  let teamTwoTotalWeight = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      teamOneTotalWeight += array[i];
    } else {
      teamTwoTotalWeight += array[i];
    }
  }
  return [teamOneTotalWeight, teamTwoTotalWeight];
}

tests.forEach((test)=>console.log(`is: ${rowWeights(test[0])}, should be: ${test[1]}`));
