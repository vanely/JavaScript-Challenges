// takes in matrix-ish array
function amidakuji(ar) {
    // reverse the matrix array
    ar.reverse();
    const flow = (_, n) => {
        
        return ar.reduce((acc, val) => {
            if(val[acc] === '1') { 
                return acc + 1 
            } else if (val[acc - 1] === '1') {
                 acc - 1 
            } else { 
                acc
            }
        }, n);
    }

    return Array.from({ length: ar[0].length + 1 }, flow);
}