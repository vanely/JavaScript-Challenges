const word1 = "pal";
const word2 = 'lapindrome';
const word3 = 'lap';


//check for anagram
function anagram(word, otherWord) {
    let re = new RegExp(`[${word}]`, 'gi');
    // let invalid = [];
    let match = [];


    for(let i = 0; i < otherWord.length; i++) {

        console.log(otherWord[i].match(re));
        if (otherWord[i].match(re) !== null) {

            match = [];
            match.push(word, otherWord);
        }
        else if (otherWord[i].match(re) === null) {
            match = [];
            break;
        }
    }
    return match;
}
console.log(anagram(word1, word3));