const m1 = "BWBWBW";
const m2 = "BWBWBB";
const m3 = "WWWWBB";

// const child = (bird1, bird2) => {
//   // break color combinations into groups of 2
//   // if one of the groups match return "true", is possible child

//   let isPossibleChild = false;
//   const re = /[a-z]{2}/ig;
//   const birdOneGroupsOfTwo = bird1.match(re);
//   const birdTwoGroupsOfTwo = bird2.match(re);
//   for (let i = 0; i < birdOneGroupsOfTwo.length; i++) {
//     for (let j = 0; j < birdTwoGroupsOfTwo.length; j++) {
//       if (birdOneGroupsOfTwo[i] === birdTwoGroupsOfTwo[j]) {
//         isPossibleChild = true;
//         break;
//       }
//     }
//   }
//   return isPossibleChild;  
// }

const testChild = (bird1, bird2) => {
  const b1Arr = bird1.split('');
  const b2Arr = bird2.split('');

  const childTest = b1Arr.reduce((acc, currVal, index) => {
    if ((currVal in acc) && (currVal !== b2Arr[index])) {
      acc[currVal] += 1;
    } else if (!(currVal in acc) && (currVal !== b2Arr[index])) {
      acc[currVal] = 1;
    }
    return acc
  }, {});

  return Object.values(childTest).reduce((sum, num) => sum += num, 0);
}

const child = (bird1, bird2) => {
  if (bird1 === bird2) {
    return false;
  }
  const test = testChild(bird1, bird2);
  return test < 3;
}

const grandchild = (bird1, bird2) => {
  if (bird1.length === 1 && bird2.length === 1) {
    if (bird1 === bird2) {
      return true;
    }
    return false;
  }
  const test = testChild(bird1, bird2);
  return test < 5;
}

// child(m1, m2);
console.log(child2(m2, m3));
