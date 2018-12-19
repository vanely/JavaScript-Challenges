
const ticket1 = [['ABC', 65], ['HGR', 74], ['BYHT', 74]]; //2
const tickey2 = [['HGTYRE', 74], ['BE', 66], ['JKTY', 74]]; //3
const possibleWin1 = 2;
const possibleWin2 = 3;

// const str = 'may';
// const num = ['3', '5', '2', '6'];

function bingo(ticket, win){
    //empty arrays for strings, and numbers
    let strs = [], nums = [];
    
    //winning matches
    let winningVals = [];

    //iterate over items in ticket
    for(let i = 0; i < ticket.length; i++)
    {
        //iterate over items within inner arrays in ticket
        for(let j = 0; j < ticket[i].length; j++)
        {   

            //if string push into strs, else push into nums
            if(typeof(ticket[i][j]) === 'string')
            {
                strs.push(ticket[i][j]);
            }
            else if(typeof(ticket[i][j]) === 'number')
            {
                nums.push(ticket[i][j]);
            }

            for(let k = 0; k < ticket[i][0]; i++)
            {
                if(ticket[i][j].charCodeAt(k) === ticket[i][1])
                {
                    console.log(ticket[i]);
                }
            }
        }
    }
    //check if letter char codes in str match with the number they were within array.
    // for(let k = 0; k < strs.length; k++)
    // {
    //     for(let l = 0; l < strs[k].length; l++)
    //     {
    //         if(strs[k].charCodeAt(strs[k][l]) === nums[k])
    //         {
    //             console.log(strs[k], nums[k]);
    //             winningVals.push([strs[k], nums[k]]);
    //         }
    //     }
    // }
    console.log(winningVals.length);
    return winningVals.length === win ? 'Winner!' : 'Loser!';

    console.log(winningVals);
    console.log('-------------------');
    console.log(strs);
    console.log(nums);
}
let b = 'B';
console.log(b.charCodeAt(0));
console.log(bingo(ticket1, possibleWin1));

// function bingo(ticket, win){

//     for(let i = 0; i < ticket1.length; i++)
//     {
//         for(let j = 0; j < ticket1[i].length; j++)
//         {   
//             if(typeof(ticket1[i][j]) === 'string')
//             {
//                 for(let k = 0; k < ticket1[i][j].length; k++)
//                 {
//                     if(ticket1[i][j].charCodeAt(ticket1[i][j][k]) === ticket1[i][1])
//                     {
//                         console.log('match');
//                     }
//                     else
//                     {
//                         console.log("there's no match");
//                     }
//                 }
//             }
//         }
//     }
// }



// console.log(str.charCodeAt(2));
// let strIndices = ;

// function bingo(ticket, win){
    
//     for(let i = 0; i < ticket1.length; i++)
//     {
//         for(let j = 0; j < ticket1[i].length; j++)
//         {   
//             let strs = [];
//             let nums = [];
//             if(typeof(ticket1[i][j]) === 'string')
//             {
//               strs.push(ticket1[i][j]);
//             }
//             else if(typeof(ticket1[i][j]) === 'number')
//             {
//                 console.log(ticket1[i][j]);
//             }
//         }
//     }
// }


// for(let i = 0; i < ticket1.length; i++)
// {
//     let strs = [];
//     let nums = [];
//     for(let j = 0; j < ticket1[i].length; j++)
//     {   
//         if(typeof(ticket1[i][j]) === 'string')
//         {
//             strs.push(ticket1[i][j]);
//         }
//         else if(typeof(ticket1[i][j]) === 'number')
//         {
//             nums.push(ticket1[i][j]);
//         }
//         for(let k = 0; k < strs.length; k++)
//         {
//             // if(strs[k].charCodeAt(k) === nums[0])
//             // {
//             // }
//             console.log(nums);
//             console.log(strs[k]);
//         }
//     }
// }