/**
 * https://www.codewars.com/kata/5235c913397cbf2508000048/train/javascript
 * 
 * Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression
 * 
 * Example:
 * Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
 */

// remember PEMDAS
const op1 = "2 / 2 + 3 * 4 - 6"
const op2 = "127"
const op3 = "2 - 3 - 4"
const op4 = "10 * 5 / 2"

function Calculator() {
  this.operation = "";
}

Calculator.prototype.checkIfIsNumber = function(input) {
  if (isNaN(Number(input))) {
    throw `input ${input} is NOT a number ${Number(input)}`;
  }
  return input
}

Calculator.prototype.evaluate = function(operation) {
  this.operation = operation;

  // iterate through chars in string.
  // find out whether the char is a num or symbol.
  // figure out the order of operators to follow PEMDAS
  // perform operations in correct order
}

const calc = new Calculator()

// console.log(calc.evaluate(op1));
// console.log(calc.evaluate(op2));
// console.log(calc.evaluate(op3));
// console.log(calc.evaluate(op4));

class EvalCalculator {
  constructor() {
    this.operation = ''
  }

  evaluate(operation) {
    this.operation = operation
    return eval(operation)
  }
}

const EvilC = new EvalCalculator()
console.log(EvilC.evaluate(op1))
