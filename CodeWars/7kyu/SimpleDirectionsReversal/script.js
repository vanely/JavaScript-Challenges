// solve(["Begin on Road A", "Right on Road B", "Right on Road C", "Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A'];
// solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) = ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy'];
// solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']) = ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd'];
// solve(['Begin on Road A']) = ['Begin on Road A']

const dir1 = ["Begin on Road A", "Right on Road B", "Right on Road C", "Left on Road D"];
const dir2 = ['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr'];
const dir3 = ['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr'];
const dir4 = ['Begin on Road A']
const dir5 = ['Begin on Code Ln', 'Left on Lua Dr', 'Left on Seventh Cr', 'Right on Python Pkwy', 'Right on 7th Close', 'Right on Tenth Close', 'Right on 2nd Backroad', 'Left on Lua Expressway', 'Left on Ninth Byway', 'Right on 6th Grove', 'Right on Codewars Dr', 'Right on Red Rd', 'Left on 25th St', 'Left on Haskell Alley', 'Right on Codewars Cr', 'Left on Python Place', 'Right on 11th St', 'Left on Eighth Lane', 'Right on Ruby Cr', 'Right on 5th Pkwy', 'Left on Third Alley', 'Left on String Expressway', 'Right on 11th Freeway', 'Left on Java Boulevard', 'Left on Ninth St', 'Left on Second Expressway', 'Left on Java Cr', 'Right on Haskell Alley', 'Left on Code Place', 'Left on Nim Grove', 'Right on Nim Boulevard'];

function solve(arr) {
  // this isn't a reversal from perspective.
  // first direction is always "Begin", the subsequent directions are reversed, and flipped to their opposite. The locations are also reversed. 
  const directions = [];
  const locations = [];
  let reversedLocations;
  const reversedDirections = [];
  arr.forEach((step) => {
    const splitDirectionAndLocation = step.split(RegExp(' on '));
    // console.log('splits: ', splitDirectionAndLocation);
    // console.log(['splitDirectionsAndLocations: ', splitDirectionAndLocation])
    if (splitDirectionAndLocation[0].trim() === 'Right') {
      directions.push('Left');
    } else if (splitDirectionAndLocation[0].trim() === 'Left') {
      directions.push('Right');
    } else {
      directions.push(splitDirectionAndLocation[0].trim());
    }
    locations.push(splitDirectionAndLocation[1].trim()); 
  })
  directions.splice(1, directions.length, ...directions.slice(1, directions.length).reverse());
  
  reversedLocations = locations.reverse();

  directions.forEach((direction, index) => reversedDirections.push(`${direction} on ${reversedLocations[index]}`));
  return reversedDirections;
}


function solve2(arr) {
  return arr.reverse().map((item, index, arr) => {
    if (index === 0) return item.replace(/Left|Right/, 'Begin')
    else if (arr[index - 1].includes('Right')) return item.replace(/Left|Right|Begin/, 'Left')
    else return item.replace(/Left|Right|Begin/, 'Right')
  })
}

const solve3 = arr =>
  arr.reverse().map((val, idx) => val.replace(/^\w+/, () => idx ? /^Left/.test(arr[--idx]) ? `Right` : `Left` : `Begin`));

console.log(solve(dir1));