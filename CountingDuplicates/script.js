// Write a function that will return the count of distinct case -insensitive alphabetic characters and numeric digits that occur more than once in the input string.The input string can be assumed to contain only alphabets(both uppercase and lowercase) and numeric digits.


let text1 = "abcde"// -> 0 # no characters repeats more than once
let text2 = "aabbcde"// -> 2 # 'a' and 'b'
let text3 = "aabBcde31"// -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
let text4 = "indivisibility"// -> 1 # 'i' occurs six times
let text5 = "Indivisibilities"// -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {

    let reoccured = [];

    const textArr = text.toLowerCase().split('');
    let obj = textArr.reduce((chars, char) => {
        if(char in chars) {
            chars[char]++;
        }
        else {
            chars[char] = 1;
        }
        return chars;
    }, {});

    // console.log(Object.entries(obj)[0][1]);
    Object.keys(obj).map((char) => {
        if(obj[char] >= 2) {
            reoccured.push(char);
        }
    });

    return reoccured.length;
}

console.log(duplicateCount(text5));

//-----------------------------------------------------------------

function solution(S) {
    var occurrences = new Array(26);
    for (var i = 0; i < occurrences.length; i++) {
        occurrences[i] = 0;
    }

    for (var id in S) {
        occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
    }

    var best_char = 'a';
    var best_res = 0;

    for (var i = 1; i < 26; i++) {
        if (occurrences[i] >= best_res) {
            best_char = String.fromCharCode('a'.charCodeAt(0) + i);
            best_res = occurrences[i];
        }
    }

    return best_char;
}