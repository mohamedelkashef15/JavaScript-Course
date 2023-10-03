//* Type Conversion
let year = "2028";

// 1- Convert String to Number
year = parseInt(year);
year = parseFloat(year);
year = +year;
year = Number(year);

// 2- Convert Number to String
year = year.toString();
year = String(year);

// console.log(year, typeof year);

//* Type Coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");

console.log("23" - "5");
console.log("20" * "2");
console.log("20" / "2");

// Practical Example
let num = 1 + "10"; // 110
num = num - 10; // 100

console.log(num);
