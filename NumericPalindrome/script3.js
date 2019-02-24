// 1.[] create array for 3 digit factor pair products
// 2.[] check for palindrome
// 3.[] create array of palindrome and return max


// func that will check for palins
const checkForPalin = (num) =>
{
  return Number(num.toString().split('').reverse().join('')) === num;
}

const highestThreeDigitPalin = () =>
{
  // empty array for palina
  var arrOfPalins = [];
  // find highest and lowest products of 3 digit
  for(let i = 100; i <= 999; i++)
  {
    for(let j = 100; j <= 999; j++)
    {
      let product = j * i;
      // use checkForPalin() to filter out palins and push to arrOfPalins
      checkForPalin(product) ? arrOfPalins.push(product) : null;
    }
  }
  // output highest
  return Math.max.apply(Math, arrOfPalins);
}

//if avoiding the use of Max^^^
//comparing the first element of output array to the other
//elements of the array and replace the value of the variable
//holding the first element recursively as it is compared 
//with a higher value

console.log(highestThreeDigitPalin());
