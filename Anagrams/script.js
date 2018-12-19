/*What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example: */

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

/*Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. */

const wrd1 = 'abba'; //['aabb', 'bbaa']
const wrds1 = ['aabb', 'abcd', 'bbaa', 'dada'];

const wrd2 = 'racer'; //['carer', 'racer']
const wrds2 = ['crazer', 'carer', 'racar', 'caers', 'racer'];

const wrd3 = 'laser'; //[]
const wrds3 = ['lazing', 'lazy', 'lacer'];

//can use a counter, but when checking multiple char occurances an equal amount of counters would have to be made
//METHOD 1
function anagrams(word, words) {
    //will contain last two matching words
    let output = [];
    let wordRegEx = new RegExp(`[${word}]`, 'gi');

    //iter through words
    for(let i = 0; i < words.length; i++) {
        //check if word and word in words are already equal
        if(word === words[i]) {
            output.push(word, words[i]);
            return output;
        } 
        for(let j = 0; j < words[i].length; j++) {
            
            if (words[i].match(wordRegEx) !== null && charCount(word, word[j]) === charCount(words[i], words[i][j])) {
    
                output.push(word, words[i]);
                return output;
            }
            else if (words[i].match(wordRegEx) === null) {
    
                // checkAllLetters.push(false);
                // console.log(checkAllLetters);
                output = [];
                return output;
            }   
        }  
    }

    //check for chararcter occurance in a string
    function charCount(string, char) {
        var re = new RegExp(char, "gi");
        return string.match(re).length;
    }
    return [... new Set(output)];
}

// console.log(anagrams(wrd2, wrds2));


//METHOD 2
function anagrams2(word, words) {
    //will contain last two matching words
    let output = [];
    let re = new RegExp(`[${word}]`, 'gi');

    //iter through words
    for (let i = 0; i < words.length; i++) {
        //check if word and word in words are already equal
        if (word === words[i]) {

            output.push(word, words[i]);
            return output;
        }
        else if(word.length === words[i].length && words[i].match(re) !== null) {

            output.push(word, words[i]);
            return output;
        }
        // for (let j = 0; j < words[i].length; j++) {
        //     //if regex chars match word in array chars clear output and push both word, and words[i]
        //     if (words[i][j].match(re) !== null) {

        //         output = [];
        //         output.push(word, words[i]);
        //     } 
        //     //else clear output and stop loop
        //     else if (words[i][j].match(re) === null) {
               
        //         output = [];
        //         break;
        //     }
        // }
    }
    return output;
}

// console.log(anagrams2(wrd2, wrds2));

//METHOD 3 
function anagrams3(word, words) {
    //will contain last two matching words
    let output = [];
    let re = new RegExp(`[${word}]`, 'gi');

    //iter through words
    for (let i = 0; i < words.length; i++) {
        //check if word and word in words are already equal
        if (word === words[i]) {

            output.push(word, words[i]);
            return output;
        } 
        //if length is same and RegEx matches push both words to output and return
        for(let j = 0; j < words[i].length; j++) {

            if (word.length === words[i].length && words[i][j].match(re) !== null) {
                
                output = [];
                output.push(word, words[i]);
            }
            else if (words[i][j].match(re) === null) {
                output = [];
                break;
            }
        }
    }
    return output;
}
// console.log(anagrams3(wrd1, wrds1));


//new approach (I will take all the letters of 'word' out of an alphabet array, and then use a non matching regex)
//METHOD 4 (Working)
function anagrams4(word, words) {
    //will contain last two matching words
    let output = [];
    let allChars = [];
    let re = new RegExp(`[^${word}]`, 'gi');
    
    for(let i = 0; i < words.length; i++) {

        for(let j = 0; j < words[i].length; j++) {
            
            if(words[i].length === word.length && words[i][j].match(re) === null) {
                output = [];
                output.push(word, words[i]);
                allChars.push(null);

                if(allChars.length === word.length && allChars.every(val => val === null)) {
                    return output;
                }
            }
        }
    }
    output = [];
    return output;    
}
// console.log(anagrams4(wrd3, wrds3));



//Incomplete version
function anagrams5(word, words) {
    let output = [];
    let newWords  = [];

    words.forEach((wrd) => {
        wrd.length === word.length ? newWords.push(wrd) : null;
    });

    newWords.forEach((wrd) => {
       for(let i = 0; i < word.length; i++) {
           if(!wrd[i].includes(word[i]) && !word[i].includes(wrd[i])) {
                output.push(null);
           }
           else {

           }
       } 
    });
    console.log(newWords);
}

console.log(anagrams5(wrd2, wrds2));