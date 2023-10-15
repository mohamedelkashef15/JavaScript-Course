/*
  while (condition) {
  
  }
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// Example 1
let number = prompt("Enter a number between 10 to 50");

while (number < 10 || number > 50) {
  number = prompt("Wrong Input. Enter number between 10 to 50");
}

console.log(`You have enterd ${number}`);

// Challege
let password = prompt("Enter your password");
const correctPassword = "hello123";

while (password !== correctPassword) {
  password = prompt("Wrong Password. Try again");
}

console.log("Login Successful");
