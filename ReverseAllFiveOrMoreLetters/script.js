
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.*/

const phrase1 = "Hey fellow warriors";
const phrase2 = "This is a test";
const phrase3 = "This is another test";

//method 1
function spinWords(str) {

    let strArr = str.split(' '); 

    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i].length >= 5) {
            strArr[i] = strArr[i].split('').reverse().join('');
        }
        else {
            continue;
        }
    }
    return strArr.join(' ');
}


//method 2
function spinWords2(words) {
    return words.split(' ').map((word) => {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

//method 3
function spinWords3(string) {
    return string.replace(/\w{5,}/g, (w) => { return w.split('').reverse().join('') })
}

console.log(spinWords3(phrase3));