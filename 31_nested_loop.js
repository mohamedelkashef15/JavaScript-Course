// Nested For loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${5 * i}`);
// }

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  if (i !== 10) console.log("-----------");
}

// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// ...
// 1 * 10 = 10
// ------------
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// ...
// 2 * 10 = 20
// ------------
// 3

// console.log("5 * 1 = 5");
// console.log("5 * 2 = 10");
// console.log("5 * 3 = 15");
// console.log("5 * 4 = 20");
// console.log("5 * 5 = 25");
// console.log("5 * 6 = 30");
// console.log("5 * 7 = 35");
// console.log("5 * 8 = 40");
// console.log("5 * 9 = 45");
// console.log("5 * 10 = 50");
