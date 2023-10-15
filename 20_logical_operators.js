/*
  Logical Operators
    - && AND
      - Must all conditions are true

    - || OR
      - Only one condition is true 

    - ! Not
*/
const age = 25,
  hasLicense = true;

if (age >= 21 && hasLicense == true) {
  console.log("You are hierd");
} else {
  console.log("You are rejected");
}

const isVacation = false,
  isWeekend = false;

if (isVacation === true || isWeekend === true) {
  console.log("You can relax");
} else {
  console.log("You have to study");
}

console.log(!true);
console.log(!(5 === 5));
