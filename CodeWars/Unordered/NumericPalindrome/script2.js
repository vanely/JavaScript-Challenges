// 1.[] create array of 3 digit factor pair products
// 2.[] check for palindrome
// 3.[] create array of palindrome and return max

let nums = [22, 45, 754, 838, 490, 989, 12, 66];

const threeDigitFactors = () =>
{
  const arrOfFactors = [];
  for(let i = 100; i <= 999; i++)
  {
    for(let j = 100; j <= 999; i++)
    {
      arrOfFactors.push(j * i);
    }
  }
  return arrOfFactors;
}

// console.log(threeDigitFactors());

const checkPalin = (arr) =>
{
  // empty array for palins
  // filter for palins
  let arrOfPalins = [];
  for(let i = 0; i < arr.length; i++)
  {
    let filterArrForPalin = arr.filter(() =>
    {
      // reverse num
      let rev = Number(arr[i].toString().split('').reverse().join(''));
      // check for palin and push to arrOfPalins
      rev === arr[i] ? arrOfPalins.push(arr[i]) : null;
    });
  }
  return arrOfPalins;
}

console.log(checkPalin(nums));
