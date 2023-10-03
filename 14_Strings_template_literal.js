// String and Template Literals
const firstName = "Mohamed",
  age = 22,
  job = "Frontend developer",
  birthdate = 2001;

const user = "My name is " + firstName + ". I am " + age + " years old." + " I work as " + job + ".";

console.log(user);

const user2 = `My name is ${firstName}. I am ${2023 - 2001} years old. My job is a ${job}.`;

console.log(user2);
