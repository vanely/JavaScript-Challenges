/**
 * https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
 * 
 * Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.
 * For example:
 * 
 * // should return true
 * [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
 *
 * // should return false
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
 * 
 * // should return true
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
 * 
 * // should return false
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
 *
 * For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
 */

Array.prototype.sameStructureAs = function(other) {
  const obj = {
    this: this,
    other: other,
  }

  function dimensionalRecursion(arr1, arr2) {
    let lengthOfCurrentDimension = arr1.length;

    if (arr1.length === arr2.length) {
      if (Array.isArray()) {

      }
    }
    return false;
    // if ((Array.isArray(arr1) && arr1.length === arr2.length) && (Array.isArray(arr2) && arr2.length === arr1.le)) {

    // }
  }
  return obj;
}

// should return true
console.log([1, 1, 1].sameStructureAs([2, 2, 2]));
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));

// should return false
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
console.log([1, [1, 1]].sameStructureAs([[2], 2]));

// should return true
console.log([[[], []]].sameStructureAs([[[], []]]));

// should return false
console.log([[[], []]].sameStructureAs([[1, 1]]));

