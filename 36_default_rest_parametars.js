/*
  - Default parameter
  - Rest parameter
*/

// Default parameter
function greetings(name = "Guest") {
  return `Hello ${name}.`;
}

console.log(greetings("Mohamed"));
console.log(greetings());

// Spread operator
const x = [1, 2, 3, ...[4, 5]];
console.log(x);

// Rest parameter
function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

console.log(sum(5, 3, 2, 10, 12, 14));

// result = 0
// result = result + numbers[i]
// result = 5 + 3
// result = 8 + 2 = 10
