// takes number of repititions, and string to repeat

let tr = 'Hi';


function repeatStr (n, s) {

    let arr = [], newStr = '';

    for(let i = 0; i < n; i++)
    {
        arr.push(s)
    }

    newStr = arr.join('');
    return newStr;
}

console.log(repeatStr(3, tr));