/*
  1. Funciton Declaration
  2. Funciton Expresion | anonymos function
  3. Arrow Function
*/

// 1. Funciton Declaration
console.log(sayHello("Mohamed"));

function sayHello(name) {
  return `Hello ${name}`;
}

// 2. Funciton Expresion | anonymos function

const sayHi = function (name) {
  return `Hi ${name}`;
};

console.log(sayHi("Mohamed"));

// 3. Arrow Function
const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => {
  let result = num1 * num2;
  return result;
};

const power2 = (num) => num ** 2;

console.log(add(10, 5));
console.log(multiply(10, 5));
console.log(power2(10));
