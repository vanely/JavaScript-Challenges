//------------------------------------------------------------------------------
//REFACTORED
//------------------------------------------------------------------------------
const strNums = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";

function highAndLow(numbers){
    //split items into arr
    const strNumsArr = numbers.split(' ');

    //create arr to store nums
    const nums = [];

    //loop over items and convert to nums
    strNumsArr.forEach(element => {
        nums.push(Number(element));
    });

    let lowest = nums[0];
    let highest = nums[0];
    //iterate over nums arr, find lowest and highest
    for(let i = 0; i < nums.length; i++) {

        lowest >= nums[i] ? lowest = nums[i] : lowest;

        highest <= nums[i] ? highest = nums[i] : highest;
    }
    return `${highest} ${lowest}`;    
}

console.log(highAndLow(strNums)); // 542, -214

//------------------------------------------------------------------------------
//ORIGINAL
//------------------------------------------------------------------------------
function highAndLow(numbers){
    //split items into arr
    const strNumsArr = numbers.split(' ');

    //create arr to store nums
    const nums = [];

    //loop over items and convert to nums
    for(let i = 0; i < strNumsArr.length; i++) {
        nums.push(Number(strNumsArr[i]));
    }

    //iterate over nums arr, find lowest and highest
    let lowest = nums[0];
    let highest = nums[0];
    for(let i = 0; i < nums.length; i++) {
        if(lowest >= nums[i])
        {
            //lowest
            lowest = nums[i];
        }
        else if(highest <= nums[i])
        {
            //highest
            highest = nums[i];
        }
    }
    return `${highest} ${lowest}`;    
}