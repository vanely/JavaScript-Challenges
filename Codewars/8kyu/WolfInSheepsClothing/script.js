// Wolves have been reintroduced to Great Britain.You are a sheep farmer, and are now plagued by wolves which pretend to be sheep.Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten.Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]    (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

const arr1 = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]; // "Oi! Sheep number 2! You are about to be eaten by a wolf!"
const arr2 = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]; // "Oi! Sheep number 5! You are about to be eaten by a wolf!"
const arr3 = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]; // "Oi! Sheep number 6! You are about to be eaten by a wolf!"
const arr4 = ["sheep", "wolf", "sheep"]; // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
const arr5 = ["sheep", "sheep", "wolf"]; // "Pls go away and stop eating my sheep"
 
function warnTheSheep(queue) {
  let positionInQue = queue.length - 1;

  for (let i = 0; i < queue.length; i++) {
    if ((queue[i] === 'wolf') && (queue.indexOf('wolf') !== queue.length - 1)) {
      return `Oi! Sheep number ${positionInQue}! You are about to be eaten by a wolf!`;
    } else if (queue.indexOf('wolf') === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
    } else {
      positionInQue--;
      continue;
    }
  }  
}

// simplified 
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(arr1));
console.log(warnTheSheep(arr2));
console.log(warnTheSheep(arr3));
console.log(warnTheSheep(arr4));
console.log(warnTheSheep(arr5));