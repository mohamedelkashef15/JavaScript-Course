/*
  Array Methods part 3
  - sort()
  - reverse()
  - join()
  --------------------
  spread operator 
*/

const studentNames = ["Ahmed", "Arwa", "tarek", "mohamed"];

const studentNames2 = ["Mostfa", "Islam"];

const studentId = [30, 5, 3, 2];

// sort()
console.log(studentNames);
console.log(studentNames.reverse());

console.log(studentNames.sort());

// console.log(studentId);
// console.log(studentId.sort());

// reverse()
console.log(studentNames.reverse());

// join()
console.log(studentNames.join());
console.log(studentNames.join(" "));
console.log(studentNames.join(" | "));

// spread operator (...)
let allStudents = [...studentNames, ...studentNames2];

console.log(allStudents);
console.log(studentNames.concat(studentNames2));
