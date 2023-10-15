/*
  - break => used to exit a loop 
  - continue =>  skip the current iteration of a loop and move to the next iteration.
*/

for (let i = 1; i <= 10; i += 3) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;

  console.log(i);
}

// Challenge 1
const fruits = ["Apple", "Orange", "Banana", "Grape", "Watermelon", "Mango", "Kiwi"];

for (let i = 1; i < fruits.length; i++) {
  if (fruits[i] === "Mango") break;

  console.log(fruits[i]);
}

// Challenge 2
const fruits2 = ["Apple", 1, 2, "Orange", "Banana", "Grape", 3, "Watermelon"];

for (let i = 0; i < fruits2.length; i++) {
  if (typeof fruits2[i] === "number") continue;

  console.log(fruits2[i]);
}
//
