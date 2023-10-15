/* Comparison Operators
  - (==) Equality operator 
    - compare between two values and return true or false
  - (!=) Inequality 

  - (===) Strict Equality Operator 
    - compare between two values and their types and return true or false

  - (!==) Strict Inequality 

  - (>) greater than 
  - (>=) greater than or equal

  - (<) less than
  - (<=) less than or equal
*/

let x = 5,
  y = 10;

y = x;

// (==) Equality operator
console.log(x == y); // 5 == 5

// (!=) Inequality
console.log(x != y); // 5 != 5

// (===) Strict Equality Operator
let a = 10,
  b = "10";

console.log(a == b); // true
console.log(a === b); // false

// (!==) Strict Inequality
console.log(a != b); // 10 != "10"
console.log(a !== b); // 10 !== "10"

//  - (>) greater than
// - (>=) greater than or equal

console.log(10 > 12);
console.log(10 >= 10);

//   - (<) less than
// - (<=) less than or equal
console.log(10 < 5);
console.log(5 <= 5);
