//orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
const str = 'abracadabra';
const orderedCount = (text) => {
  const charArr = [];
  const tupleArr = [];
  for(let i = 0; i < text.length; i++) {
    if(charArr.includes(text[i])) {
      continue;
    } else {
      charArr.push([text[i]]);
    }
  }

  charArr.forEach((char) => {
    tupleArr.push([char]);
  });

  return tupleArr;

}

console.log(orderedCount(str));