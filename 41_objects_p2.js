/*
  JavaScript Object
  - object constractor
  - Keys, Values, entries
*/

const person = new Object({
  name: "Mohamed",
  age: 22,
  isMarried: false,
  country: "Egypt",
  personDate: function () {
    return `${this.name} is ${this.age} years old. He live in ${this.location}. He is ${
      this.isMarried ? "Married" : "Not Married"
    }. His skills ${this.skills.join(" ")}.`;
  },
});

// console.log(person.name);
// console.log(person.age);

person.age = 24;
person.skills = ["HTML", "CSS", "JavaScript"];

console.log(person);

console.log(this);
console.log("ehllo");
// keys()
console.log(Object.keys(person));

// values()
console.log(Object.values(person));
console.log(Object.values(person)[3]);

// entries()
console.log(Object.entries(person));
console.log(Object.entries(person)[5]);
console.log(Object.entries(person)[5][1]);
console.log(Object.entries(person)[5][1][1]);
