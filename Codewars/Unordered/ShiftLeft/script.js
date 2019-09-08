//INCOMPLETE

/** You are given two strings. 
*In a single move, you can choose any of them, 
*and delete the first (i.e. leftmost) character.e
*/

/** By applying a move to the string "where", the result is the string"here"`.
*   By applying a move to the string "a", the result is an empty string""`.
*/

// TESTS
let testStr1 = 'test'; // 2
let testStr2 = 'west'; 

let testStr3 = 'test'; // 7
let testStr4 = 'yes';

// may remove the b first and not know it's in next string,
let testStr5 = 'b'; // 1
let testStr6 = 'ab';

function shiftLeft(s, t) {
  //string holders
  let str1 = s;
  let str2 = t;
  let len = str1.length + str2.length;
  // create boolean flag to alterante between moves on strings.\
  let strTurn = str1.length >= str2.length ? true : false;
  // create moves counter.
  let turnCount = 0;
  // create a function that deletes a character from beginning and makes it the new version of the string.
  // will assign value to str vars via return
  function removeCharAndUpdateStr(string) {
    string = string.replace(string[0], '');
    turnCount++;
    strTurn = !strTurn;
    return string;
  }

  for (let i = 0; i < len; i++) {
    // tests the strings for eqaulity or for no more characters.
    if ((str1 === str2) || (str1 === '') || (str2 === '')) {
      return turnCount;
    }
  
    if (strTurn) {
      str1 = removeCharAndUpdateStr(str1);
      continue;
    } else {
      str2 = removeCharAndUpdateStr(str2);
      continue;
    }
  }
  return turnCount;
}

console.log(shiftLeft(testStr5, testStr6));