// Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

const tests = [
  [['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false], "found 3"],
  [['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'], "found 5"],
  [[1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54], "found 30"],
  [["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"], "found 5"],
]

function findNeedle(haystack) {
  const indexOfNeedle = haystack.indexOf("needle");
  return indexOfNeedle ? `found the needle at position ${indexOfNeedle}` : undefined; 
}

tests.forEach((test) => {
  console.log(`is: ${findNeedle(test[0])}, output: ${test[1]}`);
})

