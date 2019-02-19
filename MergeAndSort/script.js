const arr1 = [1, 6, 4];
const arr2 = [3, 9, 4];

//merged arrays
const mergedArrs = [...arr1, ...arr2];

//sort array
// function msort(arr) {

//   for (let i = 0; i < arr.length; i++) {

//     for (let j = i + 1; j < arr.length; j++) {

//       if (arr[i] > arr[j]) {

//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }

//   return arr;
// }

// console.log(msort(mergedArrs));



//O(n^2)
function mergeAndSort(arr1, arr2) {

  const merge = [...arr1, ...arr2];

  for(let i = 0; i < merge.length; i++) {

    for(let j = i + 1; j < merge.length; j++) {

      if(merge[i] > merge[j]) {

        [merge[i], merge[j]] = [merge[j], merge[i]];
      }
    }
  }

  return merge;
}

console.log(mergeAndSort(arr1, arr2));