/**  
 *Our football team finished the championship.The result of each match look like "x:y".Results of all matches are recorded in the array.
  For example: ["3:1", "2:2", "0:1", ...]

  Write a function that takes such list and counts the points of our team in the championship.Rules for counting points for each match:

  if x > y - 3 points
  if x < y - 0 point
  if x = y - 1 point
  Notes:

  there are 10 matches in the championship
  0 <= x <= 4
  0 <= y <= 4
*/
const games1 = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'];
const games2 = ['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'];
const games3 = ['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4'];
const games4 = ['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4'];
const games5 = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'];

//METHOD 1
function points(games) {

  const totalPoints = [];

  games.forEach(game => {

    game[0] > game[2] ? totalPoints.push(3) :
    game[0] < game[2] ? totalPoints.push(0) :
    game[0] === game[2] ? totalPoints.push(1) : null;
  });

  return totalPoints.reduce((acc, point) => {

    return acc + point;
  });
}

console.log(`games 1: ${points(games1)}`);
console.log(`games 2: ${points(games2)}`);
console.log(`games 3: ${points(games3)}`);
console.log(`games 4: ${points(games4)}`);
console.log(`games 5: ${points(games5)}`);

//METHOD 2
const points = games => games.reduce((output, current) => {
  
  return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)