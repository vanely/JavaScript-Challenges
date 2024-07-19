const a1 = [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1]
];

const a2 = [
    [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3]
];
//METHOD 1
function matrixAddition(a, b) {
    //empty array for sums
    let innerArrSums = [];

    //iter over num of inner arrays
    for (let i = 0; i < a.length; i++) {
        //for each inner array in input create an empty one for sums
        innerArrSums.push([]);
        console.log(a[i].length);
        //iter over inner arrays values
        for(let j = 0; j < a[i].length; j++) {
            //sum inner values and push to inner empty arrays
            innerArrSums[i].push(a[i][j] + b[i][j]);
        }
    }

    console.log('--------------');
    console.log(innerArrSums);
    return innerArrSums;
}

//METHOD 2
const matrixAddition = (a, b) => {
    const n = a.length;
    const m = a[0].length;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            a[i][j] += b[i][j];
    return a;
}

//METHOD 3
function matrixAddition(a, b) {
    return a.map((v, i) => v.map((x, z) => x + b[i][z]))
}

matrixAddition(a1, a2);