/* 
  Ternary Operator 
    - condition ? true : false
*/

const age = 12;

if (age > 18) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

age > 18 ? console.log("You can drive") : console.log("You cannot drive");

console.log(age > 18 ? "You can drive" : "You cannot drive");

const result = age > 18 ? "You can drive" : "You cannot drive";

console.log(result);

// Multiple conditions
const temp = 25;

if (temp > 30) console.log("The weather is hot");
else if (temp > 20) console.log("The weather is fine");
else console.log("The weather is cold");

const message = temp > 30 ? "The weather is hot" : temp > 20 ? "The weather is fine" : "The weather is cold";

console.log(message);
