const temp = prompt("Enter temperature degree?");

if (temp > 30) {
  console.log("The weather is hot");
} else if (temp > 20) {
  console.log("The weather is fine.");
} else if (temp < 20) {
  console.log("The weather is cold");
} else {
  console.log("Enter a valid Number");
}
