/**
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
 * 
 * If you've completed this kata already and want a bigger challenge, here's the 3D version
 * Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
 * 
 * There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. 
 * When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). 
 * Below is an example of what a box of cubes might look like before and after switching gravity.
 * 
 * 
 
 +---+                                       +---+
 |   |                                       |   |
 +---+                                       +---+
 +---++---+     +---+              +---++---++---+
 |   ||   |     |   |   -->        |   ||   ||   |
 +---++---+     +---+              +---++---++---+
 +---++---++---++---+         +---++---++---++---+
 |   ||   ||   ||   |         |   ||   ||   ||   |
 +---++---++---++---+         +---++---++---++---+
 */

// flip('R', [3, 2, 1, 2]) => [1, 2, 2, 3]   // an 'R' flip is ascending order
const box1 = [3, 2, 1, 2];

// flip('L', [1, 4, 5, 3, 5]) => [5, 5, 4, 3, 1]   // a 'L' flip is descending order
const box2 = [1, 4, 5, 3, 5];

function flip(d, a) {
  if (d === 'R') {
    return a.sort((a, b) => a - b)
  } else if ('L') {
    return a.sort((a, b) => b - a)
  }
}

console.log(flip('R', box1));
console.log(flip('L', box2));