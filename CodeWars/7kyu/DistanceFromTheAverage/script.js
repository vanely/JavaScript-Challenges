// Given a starting list/array of data, it could make some statistical sense to know how much each value differs from the average.
//
// If for example during a week of work you have collected 55,95,62,36,48 contacts for your business, it might be interesting to know the total (296), the average (59.2), but also how much you moved away from the average each single day.
//
// For example on the first day you did something less than the said average (55, meaning -4.2 compared to the average), much more in the second day (95, 35.8 more than the average and so on).
//
// The resulting list/array of differences starting from [55, 95, 62, 36, 48] is thus [4.2, -35.8, -2.8, 23.2, 11.2].
//
// Assuming you will only get valid inputs (ie: only arrays/lists with numbers), create a function to do that, rounding each difference to the second decimal digit (this is not needed in Haskell); extra points if you do so in some smart, clever or concise way :)
const tests = [
  [[55, 95, 62, 36, 48], [4.2, -35.8, -2.8, 23.2, 11.2]],
  [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
  [[1, -1, 1, -1, 1, -1], [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0]],
  [[1, -1, 1, -1, 1], [-0.8, 1.2, -0.8, 1.2, -0.8]],
  [[2, -2], [-2.0, 2.0]],
  [[1], [0]],
  [[123, -65, 32432, -353, -534], [6197.6, 6385.6, -26111.4, 6673.6, 6854.6]],
]

function distancesFromAverage(arr) {
  const average = arr.reduce((acc, curr) => {
    return acc += curr;
  }, 0) / arr.length;

  const averagesPerDay = arr.map((num) => {
    return Math.round((average - num) * 100) / 100;
  })
  return averagesPerDay;
}

// console.log(distancesFromAverage(tests[0][0]));

tests.forEach(([test, output]) => {
  console.log(`is: ${distancesFromAverage(test)}, should be: ${output}`);
})
