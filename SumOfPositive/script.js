const arr1 = [1,-4,7,12]; //20
const arr2 = [1,-2,3,4,5]; //13
const arr3 = [1,2,3,4,5]; //15
const arr4 = [-1,-2,-3,-4,-5]; //0


function positiveSum(arr) {
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] >= 0 ? sum += arr[i] : null;
    }
    return sum;
}

console.log(positiveSum(arr3));