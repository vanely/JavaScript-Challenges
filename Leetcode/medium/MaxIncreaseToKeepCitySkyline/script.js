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
 * {                      top-bottom/ bottom-top [9, 4, 8, 7]
 *  city1[i][0]: highest
 *  city1[i][1]: highest
 *  city1[i][2]: highest
 *  city1[i][3]: highest
 * }
 * 
 * {                      left-right/ right-left [8, 7, 9, 3]
 *  city1[0][j]: highest
 *  city1[1][j]: highest
 *  city1[2][j]: highest
 *  city1[3][j]: highest
 * }
 */

const maxIncreaseKeepingSkyline = function (grid) {
  const city = grid;
  const topBottomSkyline = {};
  const leftRightSkyline = {};
  let sum = 0;

  if ((city.length > 1) && (city[0].length <= 50)) {
    for (let i = 0; i < city.length; i++) {
      for (let j = 0; j < city[i].length; j++) {
        if ((topBottomSkyline[i] < city[j][i]) || (topBottomSkyline[i] === undefined)) {
          topBottomSkyline[i] = city[j][i];
        }
        if ((leftRightSkyline[i] < city[i][j]) || (leftRightSkyline[i] === undefined)) {
          leftRightSkyline[i] = city[i][j];
        }
      }
    }
  
    for (let i = 0; i < city.length; i++) {
      for (let j = 0; j < city[i].length; j++) {
        while (true) {
          if ((city[j][i] < topBottomSkyline[i]) && (city[j][i]) < leftRightSkyline[j]) {
            city[j][i]++;
            sum++;
          } else {
            break;
          }
          
          while (true) {
            if ((city[i][j] < leftRightSkyline[i]) && (city[i][j] < topBottomSkyline[j])) {
              city[i][j]++;
              sum++;
            } else {
              break;
            }
          }
        }
      }
    }  
  } else {
    return 0;
  }

  return sum;
};

console.log(maxIncreaseKeepingSkyline(city1));

/**
 * out
 * [
 * [8, 4, 8, 7],
 * [7, 4, 7, 7],
 * [9, 4, 8, 7],
 * [3, 3, 3, 3]
 * ]
 */