function check(str, n) {
    if(str[0] === "+"){
        return n + Number(str[1])
    } else if (str[0] === "-"){
        return n - Number(str[1])
    } else if (str[0] === "*"){
        return n * Number(str[1])
    } else if (str[0] === "/"){
        return n / Number(str[1])
    }else{
        return null
    }
}

function zero(op=0) { 
    if (Number(op) === NaN) {
        return check(op, 0)
    } else {
        return op
    }
}

function one(op=1) { 
    if (Number(op) === NaN){
        return check(op, 1)
    }else{
        return op
    }
}

function two(op=2) {
    if (Number(op) === NaN) {
        return check(op, 2)
    } else {
        return op
    }
}
function three(op=3) { 
    if (Number(op) === NaN) {
        return check(op, 3)
    } else {
        return op
    }
}
function four(op=4) {
    if (Number(op) === NaN) {
        return check(op, 4)
    } else {
        return op
    }
}

function five(op=5) { 
    if (Number(op) === NaN) {
        return check(op, 5)
    } else {
        return op
    } 
}

function six(op=6) { 
    if (Number(op) === NaN) {
        return check(op, 6)
    } else {
        return op
    }
}

function seven(op=7){
    if(Number(op) === NaN){
        return check(op, 7)
    }else{
        return op
    }
}
function eight(op=8) {
    if (Number(op) === NaN) {
        return check(op, 9)
    } else {
        return op
    }
}
function nine(op = 9) {
    if (Number(op) === NaN) {
        return check(op, 9)
    } else {
        return op
    }
}

function plus(num) {
    return '+' + num.toString();
 }
function minus(num) { 
    return '-' + num.toString();
}
function times(num) {
    return '*' + num.toString();
 }
function dividedBy(num) { 
    return '/' + num.toString();
}


console.log(two(plus(four())));