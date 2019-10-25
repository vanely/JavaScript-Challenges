const arr = [1, 2];
const arr2 = [2, 4];

// swap with reference to arguments object
function swapValues(arr) {
  var args = arguments[0];
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
  return args;
}

// es6 swap
function betterSwap(arr) {
  return [arr[0], arr[1]] = [arr[1], arr[0]];
}


console.log(swapValues(arr));