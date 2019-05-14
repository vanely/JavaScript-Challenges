const arr1 = [7, 3, 6];
const arr2 = [23, 1, 18];

function mergeArrs(arr1, arr2) {
  
  const newArr = arr1;

  for(let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr;
}


function sortArrs(arr) {

  for(let i = 0; i < arr.length; i++) {

    for(let j = i + 1; j < arr.length; i++) {

      if(arr[i] > arr[j]) {

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(mergeArrs(arr1, arr2));
console.log(sortArrs(mergeArrs(arr1, arr2)));