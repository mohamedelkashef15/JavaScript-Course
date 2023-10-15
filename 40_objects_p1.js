/*
  JavaScript Object
  
  const person = {
    key: value,
    key: value,
  };

  - Dot Notation VS Bracket Notation 
  - this keyword
*/

const person = {
  name: "Mohamed",
  age: 22,
  location: "Egypt",
  isMarried: false,
  "my job": "Software Developer",
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    country: "Egypt",
    city: "Giza",
    street: "Hosary Mosuqe",
  },
  personDate: function () {
    return `${this.name} is ${this.age} years old. He live in ${this.location}. He is ${
      this.isMarried ? "Married" : "Not Married"
    }. His skills ${this.skills.join(" ")}.`;
  },
};

console.log(person);
console.log(person.name);

console.log(person.age);
person.age = 24;
console.log(person);
console.log(person["location"]);

console.log(person["my job"]);
console.log(person.skills);
console.log(person.skills[2]);
console.log(person.address.country);
person.address.country = "KSA";
console.log(person.address.country);

console.log(person.personDate());
person.isMarried = true;

console.log(person.personDate());
