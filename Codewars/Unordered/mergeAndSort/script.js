const arr1 = [12, 4, 7];
const arr2 = [1, 33, 9];

/**
 * @param {string[]|number[]} arr1
 * @param {string[]|number[]} arr2
 * @return {Array}
 */
function merged(arr1, arr2) {

  /** @var {string[]|number[]} newArr */
  const newArr = arr1;

  for (let i = 0; i < arr2.length; i++) {

    newArr.push(arr2[i]);
  }

  /** alternatives for merging
   * 
   * arr1.concat(arr2) 
   * [...arr1, ...arr2]
   */

  return newArr;
}

/**
 * @param {string[]|number[]} arr
 * @return {string[]|number[]}
 */
function sorted(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

      if (arr[i] > arr[j]) {

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      /** alternatives for sorting
       * 
       * arr.sort((a, b) => a - b)
       * [arr[i], arr[j]] = [arr[j], arr[i]]
       */
    }
  }
  return arr;
}

console.log(sorted(merged(arr1, arr2)));