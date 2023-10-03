// Unary Plus+
console.log(10);
console.log(+"10");
console.log(+"-10");
console.log(+"-10.5");
console.log(+"Ahmed"); // Not a Number

console.log("--------");
// Negation Operator
console.log(-10);
console.log(-"10");
console.log(-"-10");
console.log(-"-10.5");
console.log(-"Ahmed"); // Not a Number

// Operator Precedence
let x, y;
x = 15 + 3 * 2 - 1; // 20
x = (15 + 3) * 2 - 1; // 35

console.log(x);

x = y = 30 - 10 - 5 - 1; // 15
// y = 15
// x = y
// x = 15

console.log(x, y);
