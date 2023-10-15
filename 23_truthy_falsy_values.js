/* Falsy Values:
  - false
  - 0
  - "" or '' => empty string
  - null
  - undefined
  - NaN
*/

const x = 2934;

if (x) {
  console.log("This is a truthy value");
} else {
  console.log("This is a falsy value");
}

// Boolean()
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));

console.log(Boolean(12));
console.log(Boolean("12"));
console.log(Boolean(" "));

// isNaN()
console.log(isNaN("dsfsd"));

let y = 1;

console.log(y);
console.log(y ? "This is a truthy value" : "This is a falsy value");
