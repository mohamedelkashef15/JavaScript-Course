/*
  1- Primitive Data Types
    - number
    - string
    - boolean
    - undefined
    - null
    - BigInt
    - Symbol

  2- Reference (Object) Data Types
    - arrays
    - object
    - date
*/

// number
let salary = 10000;
console.log(salary, typeof salary);

// string
salary = "10000";
console.log(salary, typeof salary);

console.log("Mohamed" + " Elkashef");
console.log("10000" + "1000");
console.log(10000 + 1000);

// boolean
const isRaining = true;
const isSunny = false;

console.log(typeof isRaining);
console.log(typeof isSunny);

// undefined
let age;
console.log(typeof age);

// null
const year = null;
console.log(user);

// BigInt
const number = 999999999999999;
const bigNumber = 99999999999999912n;
console.log(number, typeof number);
console.log(bigNumber, typeof bigNumber);

// Arrays
const friends = ["Maged", "Hamed", "Abdelrahman"];
console.log(friends, typeof friends);

// Object
const person = {
  name: "Mohamed",
  age: 22,
  isMarried: false,
};

console.log(user, typeof user);

// Date
const date = new Date("2023-07-20");
console.log(date, typeof date);
