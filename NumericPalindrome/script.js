let num = 999;
let word = 'hello';
let arr = [2, 4, 6, 8, 10];
let revToS = Number(num.toString().split('').reverse().join(''));

// console.log(typeof revToS);

// console.log(typeof num.reverse())
if(revToS === num)
{
  console.log(`${num} is a Pali`);
}
else
{
  console.log("That's just bullshit!");
}

const paliIter = (start, end) =>
{
  let arr = [];
  let arr2 = [];
  for(let i = start; i <= end; i++)
  {
    let mult = i * i;
    let revMult = Number(mult.toString().split('').reverse().join(''));
    arr.push(revMult);
    // console.log(mult);
    // if(mult ===)
  }

  // for (let i = 0; i <= arr.length(); i++)
  if()
  {

  }
}
console.log(paliIter(100, 999));
// for(let i = 100; i <= 999; i++)
// {
//   let mult = i * i;
//   let revMult = Number(mult.toString().split('').reverse().join(''));
//   arr.push(revMult);
//   console.log(arr);
//   for(let j = 0; j < 1; i++)
//   {
//     let arr = [];
//     arr.push(revMult);
//     console.log(arr);
//   }
//   // console.log(mult);
//   // if(mult ===)
// }
