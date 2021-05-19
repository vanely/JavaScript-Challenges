/**
https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

https://www.mathsisfun.com/hexadecimals.html
 */

function rgb(r, g, b) {
  return getHexRange(r)+getHexRange(g)+getHexRange(b);
}

function getHexValue(num) {
  const hexRangeArr = getHexRange()
  const hexValueArr = [];


  for (let i = 0; i < num; i++) {
    const placeValue = 0;
    if (i === hexRangeArr.length) {
      // set the previous place value to it's current place value + 1
      
      // increment place value
      placeValue += 1;
    }
    hexValueArr[placeValue] = hexRangeArr[i];
  }
  return convertHexArrToString(hexValueArr);
}

function convertHexArrToString(hexArr) {
  return hexArr.join('')
}

function getHexRange() { return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'] }


console.log(`Hex Value: ${rgb(24, 66, 96)}`);

const hexarr = [f, ]

// letter value * base 16 to the power of its place value