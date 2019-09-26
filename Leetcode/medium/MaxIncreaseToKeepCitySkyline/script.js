/**
 * In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well.
 * At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.
 * What is the maximum total sum that the height of the buildings can be increased?
 * 
 * @param {number[][]} grid
 * @return {number}
 */

 const city1 = [ 
   [3, 0, 8, 4],
   [2, 4, 5, 7],
   [9, 2, 6, 3],
   [0, 3, 1, 0],
 ];

/** 
 * the position of each building can be represented by its index.
 * if we are looking at top - bottom or vise versa, then we create an object that logs
 * 
 * {                      top-bottom/ bottom-top
 *  city1[i][0]: highest
 *  city1[i][1]: highest
 *  city1[i][2]: highest
 *  city1[i][3]: highest
 * }
 * 
 * {                      left-right/ right-left
 *  city1[0][j]: highest
 *  city1[1][j]: highest
 *  city1[2][j]: highest
 *  city1[3][j]: highest
 * }
 */

var maxIncreaseKeepingSkyline = function (grid) {
  const topBottomSkyline = {};
  const leftRightSkyline = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ((topBottomSkyline[i] < grid[j][i]) || (topBottomSkyline[i] === undefined)) {
        topBottomSkyline[i] = grid[j][i];
      }
      if ((leftRightSkyline[i] < grid[i][j]) || (leftRightSkyline[i] === undefined)) {
        leftRightSkyline[i] = grid[i][j];
      }
    }
  }

  return [topBottomSkyline, leftRightSkyline];
};

console.log(maxIncreaseKeepingSkyline(city1));