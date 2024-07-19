const alpha = 'abcdefghijklmnopqrstuvwxyz';
const phrase = 'tbone';

//a pangram is a sentence that contains all letters of the alphabet. EX: "The quick brown fox jumps over the lazy dog"
function isPangram(string) {
    
}

//method containing alphabet
function alphabet() {
    const ABC = 'abcdefghijklmnopqrstuvwxyz';
    return ABC;
}

//checks for presence of letter in alphabet array. 
//if present the letter is taken out of the array
function checkForLetters(letter, arr) {
    for (let i = 0; i < arr.length; i++) {
        if(letter === arr[i]) {
            arr.splice(i, 1);
        }
    }
}

for(let i = 0; i < alpha.length; i++) {
    if(phrase[i] === alpha[i]) {
        alpha.splice(phrase[i], 1);
    }
}

console.log(alpha);