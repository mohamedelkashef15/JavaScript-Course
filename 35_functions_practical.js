// Function practical examples
/*
  1. Write a program that calculate rectangle area with function
  hint rectangle area = length * width

  Output: Area of rectangle = 30

2. Write a program that calculate area of circle with funciton
  hint: circle area = pi * radius * radius 
  where pi = 3.14

  Output: Area of Circle = 314

  3. Write a Calculator program take 2 numbers and operator then check if operator is +, -, *, / then return sum, subtract, product, divide of two numbers Using Function.

  Ex. Output: 20 + 5 = 25

*/

// Program 1
function calcRectangleArea(length, width) {
  return `Area of rectangle = ${length * width}`;
}

console.log(calcRectangleArea(10, 3));
console.log(calcRectangleArea(30, 15));
console.log(calcRectangleArea(40, 10));

// Program 2
function calcCircleArea(radius) {
  let pi = 3.14;
  return `Area of circle = ${(pi * radius * radius).toFixed(1)}`;
}

console.log(calcCircleArea(10));
console.log(calcCircleArea(5));
console.log(calcCircleArea(3));

function calc(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "*":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default:
      console.log("Invalid Operator");
  }
}

calc(20, 5, "+");
calc(20, 5, "-");
calc(20, 5, "/");
calc(20, 5, "*");
