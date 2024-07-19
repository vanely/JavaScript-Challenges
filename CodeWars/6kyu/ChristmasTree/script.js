/**
 * https://www.codewars.com/kata/52755006cc238fcae70000ed/train/javascript
 * 
 * Create a function that returns a christmas tree of the correct height.
 *
 * For example:
 * 
 * hieght = 5 should return:
 * 
    *    
   ***   
  *****  
 ******* 
*********

 * Height passed is always an integer between 0 and 100.
 *
 * Use \n for newlines between each line.
 * Pad with spaces so each line is the same length. The last line having only stars, no spaces.
 */

const height1 = 5;
const height2 = 2;
const height3 = 6;
const height4 = 30;

// detailed approach
function christmasTree(height) {
  let christmasTree = "";
  let spaces = height - 1;

  if (height === 0) {
    return "";
  }

  for (let i = 1; i <= height; i++) {
    if (christmasTree.length !== 0) {
      christmasTree += "\n";
    } 
    if (i === 1) {
      christmasTree += `${repeatString(" ", spaces)}${repeatString("*", i)}${repeatString(" ", spaces)}`
      spaces--;
    } else {
      christmasTree += `${repeatString(" ", spaces)}${repeatString("*", i + (i - 1))}${repeatString(" ", spaces)}`
      spaces--;
    }
  }

  return christmasTree;
}

// close to single line approach
function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return tree.join("\n");
}

// iterative string repeat
function repeatString(str, times) {
  let ret = "";
  while (times > 0) {
    ret += str;
    times--;
  }
  return ret;
}

// recursive string repeat
function recursiveStringRepeat(str, times) {
  if (times < 0) {
    return "";
  }
  if (times === 1) {
    return str;
  } else {
    return str + recursiveStringRepeat(str, times - 1);
  } 
}

// repeat using es6 repeat string method
function repeatStr(str, times) {
  if (times > 0) {
    return str.repeat(times);
  } else {
    return "";
  }
}

// console.log(christmasTree(height1, "\n"));
// console.log(christmasTree(height2, "\n"));
// console.log(christmasTree(height3, "\n"));
console.log(christmasTree(height4, "\n"));
// console.log(recursiveStringRepeat('*', 200))