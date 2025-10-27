// Task
// Given an array/list of integers, find the Nth smallest element in the array.
//
// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 

const tests = [
  [[3,1,2], 2,  2],
  [[15,20,7,10,4,3], 3,  7],
  [[-5,-1,-6,-18], 4, -1],
  [[-102,-16,-1,-2,-367,-9], 5, -2],
  [[2,169,13,-5,0,-1], 4,  2],
  [[2,1,3,3,1,2], 3,  2],
]

function nthSmallest(arr, pos){
  const orderedSet = arr.sort((a,b)=>a-b);
  return orderedSet[pos-1]; 
}

tests.forEach((test) => console.log(`is: ${nthSmallest(test[0], test[1])}, should be: ${test[2]}`));

