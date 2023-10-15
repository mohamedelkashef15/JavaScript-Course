/*
  Arrays Introduction
*/

const skill1 = "HTML";
const skill2 = "CSS";
const skill3 = "JS";
const skill4 = "Reactjs";

const arr = ["HTML", "CSS", "JS", 22, true];

console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

const names = ["Mohamed", "Ahmed", "Tarek", ["Islam", "Mahmoud"]];

// console.log(`${names[0]} ${names[1]}`);
// console.log(names[2][0]);

console.log(`Student 1: ${names[0]} ${names[1]}`);

names[0] = "Abdelrahman";
names[1] = "Khaled";

console.log(`Student 2: ${names[0]} ${names[1]}`);
console.log(names[3]);
console.log(names[3][1]);
