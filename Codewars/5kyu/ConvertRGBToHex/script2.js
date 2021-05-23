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
  return getHexValue(r) + getHexValue(g) + getHexValue(b);
}

const getHexRange = () => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function getHexValue(color) {
  if (color <= 0) {
    return '00';
  } else if (color >= 255) {
    return 'FF';
  }
  const hex = getHexRange()
  const firstNum = Math.floor(color / 16);
  const secondNum = color % 16;
  return `${getHexRange()[firstNum]}${getHexRange()[secondNum]}`
}



console.log(`Hex Value 1: ${rgb(24, 66, 96)}`); // 184260
console.log(`Hex Value 2: ${rgb(93, 234, 171)}`); // 5DEAAB
console.log(`Hex Value 3: ${rgb(127, 7, 59)}`); // 7F073B
