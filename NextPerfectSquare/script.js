let num1 = 121; //sqr
let num2 = 625; //sqr
let num3 = 155; //not sqr

// method 1
function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

// let squareAhead = Math.sqrt(num1) % 1 === 0 ? Math.pow(Math.sqrt(num1) + 1, 2) : -1; 
console.log(findNextSquare(num3));

// method 2
function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}

// method 3
function findNextSquare(sq) {
    var n = Math.sqrt(sq);
    return Number.isInteger(n)?(n+1)*(n+1):-1
}