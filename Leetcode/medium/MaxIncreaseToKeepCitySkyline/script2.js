/**
 * Optomized solution
 */

const city = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];

const maxIncreaseKeepingSkyline = (grid) => {  
  const len = grid.length;
  const city = grid;
  let sum = 0;
  const leftRightSkyline = {0: 0, 1: 0, 2: 0, 3: 0};
  const topBottomSkyline = {0: 0, 1: 0, 2: 0, 3: 0};

  for (let r = 0; r < len; r++) {
    for (let c = 0; c < len; c++) {
      leftRightSkyline[r] = Math.max(leftRightSkyline[r], city[r][c]);
      topBottomSkyline[c] = Math.max(topBottomSkyline[c], city[r][c]);
    }
  }

  console.log(leftRightSkyline);
  console.log(topBottomSkyline);

  for (let r = 0; r < len; ++r) {
    for (let c = 0; c < len; ++c) {
      sum += Math.min(leftRightSkyline[r], topBottomSkyline[c]) - city[r][c];
    }
  }

  console.log(sum);
  return sum;
}

maxIncreaseKeepingSkyline(city);