const array = [1,2,3,4];
const num = 3;

function include(arr, item){ 
    console.log(arr);
    return item in arr;
}

// function include2(arr, item){ 
//     arr.forEach(i => {
//         return i === item ? true : false;
//     });
// }


function include3(arr, item){ 
    for(let i = 0; i < arr.length; i++)
    {
        if(item in arr)
        {
            console.log(arr[i]);
            return true;
        }
        else
        {
            console.log(arr[i]);
            return false;
        }
    }
}

console.log(include(array, num));
// console.log(include2(array, num));
console.log(include3(array, num));