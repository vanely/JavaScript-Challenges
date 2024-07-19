// Simple string matching

const str1 = "code*s"; //true
const str2 = "codewars";

const str3 = "codewar*s"; //true
const str4 = "codewars";

const str5 = "aa*"; //false
const str6 = "aaa";

const str7 = "code*warrior"; //false
const str8 = "codewars";

const str9 = "c"; //true
const str10 = "c";

const str11 = "*";
const str12 = "codewars"; //true

const str13 = '*s'; //true
const str14 = 's';

const str15 = 's*'; //true
const str16 = 's';


//METHOD 1
function solve(a,b){

    let missingArr= [];
    let missingChars = '', match = ''; 
    let longest = 0;
    
    //check for longest string
    a.length >= b.length ? longest = a.length : longest = b.length;
    if (a.toString() === b.toString()) {
        return true;
    }
    //iterate over string 
    for(let i = 0; i < longest; i++)
    {   
        //if letters in string b not in string a
        if (a.indexOf(b[i]) === -1) {
            missingArr.push(b[i])
        }
    }
    //convert missingArr to word
    missingChars = missingArr.join('');

    //replace asterisk with missing letters from b
    match = a.replace('*', missingChars);
 
    //check if same 
    return match === b ? true : false;
}

function solve2(a, b) {
    let charsArrA = [], charsArrB = [];
    let charsA = '', charsB = '';
    let longest = 0;

    //check for longest string
    a.length >= b.length ? longest = a.length : longest = b.length;

    //check for asterisk in a, and b
    for(let i = 0; i < longest; i++) {
        console.log(i);
    }
}

console.log(solve2(str5, str6));
