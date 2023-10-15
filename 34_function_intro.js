/*
  function functionName(parameter1, parameter2, ...) {
    Function code
  }

  functionName(argument);
*/

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

function greatings(name, age) {
  console.log(`Hello ${name}. Welcome to the company.`);

  age > 18 ? console.log(`${name} can have a driving licence.`) : console.log(`${name} cannot have driving licence.`);
  console.log("----------");
}

greatings("Mohamed", 12);
greatings("Ahmed", 22);
greatings("Tarek", 30);
