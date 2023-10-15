let fruitColor = "red";

switch (fruitColor) {
  case "red":
    console.log("This could be an Apple.");
    break;

  case "yellow":
    console.log("This could be a banana");
    break;

  default:
    console.log("Unkown fruit color");
}

let fruitColor2 = "red";

if (fruitColor2 === "red") {
  console.log("This could be an Apple");
} else if (fruitColor2 === "yellow") {
  console.log("This could be a Banana");
} else {
  console.log("Unknown fruit color");
}
