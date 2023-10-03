/*
1) create a variable of num1 with a random number from 1 - 100

2) create a variable of num2 with a random number from 1 - 50

3) create variables of sum, differences, product, quotient, and reminder of num1, num2. 

4) log the results 
*/

const x = Math.trunc(Math.random() * 100 + 1),
  y = Math.trunc(Math.random() * 50 + 1);

console.log(x, y);
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// Challenge 2
const x1 = 40,
  y1 = 70.4,
  z = 20;

let num3 = 3823895493598;

// Print Max value of numbers
console.log(Math.max(x1, y1, z));

// Print Min value of numbers
console.log(Math.min(x1, y1, z));

// Print Integer y1 with 4 methods
console.log(Math.trunc(y1));
console.log(Math.floor(y1));
console.log(Math.round(y1));
console.log(parseInt(y1));

// Covert num3 to string then print number of digits
num3 = num3.toString();
console.log(num3.length);
