//nCols = num of total cols
//nRows = num of total rows
//col = seated col from bottom
//row = seated row from bottom
//find the number of people sitting directly behind you and to the left

//Theater One === 96
const totalCols1 = 16;
const totalRows1 = 11;
const seatCol1 = 5;
const seatRow1 = 3; 

//Theater Two === 0
const totalCols2 = 1;
const totalRows2 = 1;
const seatCol2 = 1;
const seatRow2 = 1;

//Theater Three === 18
const totalCols3 = 13;
const totalRows3 = 6;
const seatCol3 = 8;
const seatRow3 = 3;

function seatsInTheater(nCols, nRows, col, row) {
    //colsLeft = totalCols - (seatCol - 1);
    //rowsLeft = toalRow - seatRow;
    //colsLeft * rowLeft === num of people behind
    return ((nCols - (col - 1)) * (nRows - row));
}   

console.log(seatsInTheater(totalCols3, totalRows3, seatCol3, seatRow3));