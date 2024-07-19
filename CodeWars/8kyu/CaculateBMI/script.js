/**
 * https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
 * 
 * Write function bmi that calculates body mass index (bmi = weight / height^2).
 * if bmi <= 18.5 return "Underweight"
 * if bmi <= 25.0 return "Normal"
 * if bmi <= 30.0 return "Overweight"
 * if bmi > 30 return "Obese"
 */

const weight1 = 206;
const height1 = 76;

function bmi(weight, height) {
  const bmi = weight / (height ** 2);
  console.log(bmi)
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25.0) {
    return 'Normal';
  } else if (bmi <= 30.0) {
    return 'Overweight';
  } else if (bmi > 30) {
    return 'Obese';
  }
}

console.log(bmi(weight1, height1))
