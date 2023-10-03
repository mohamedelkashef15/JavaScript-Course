/*
  String Methods | P1
    - toUpperCase()
    - toLowerCase()
    - trim()
    - indexOf(search value, start)
    - lastIndexOf(search value, start)
    - charAt()
    - substring(start, end => Not Included)
*/

let myName = "Mohamed Elkashef";

// toUpperCase()
console.log(myName.toUpperCase());

// toLowerCase()
console.log(myName.toLowerCase());

/*
console.log(myName);

myName = myName.toUpperCase();
console.log(myName);
*/

// trim()
console.log("        Tarek        ");
console.log("        Tarek        ".trim());
console.log("        Tarek        ".trimStart());
console.log("        Tarek        ".trimEnd());

// indexOf(search value, start)

console.log(myName.indexOf("M"));
console.log(myName.indexOf("f"));
console.log(myName.indexOf("sadfsa"));
console.log(myName.indexOf("Elkashef"));

// console.log(myName.length);

// lastIndexOf(search value, start)
const text = "Tarek plays football. Tarek is a good player. Tarek";

console.log(text.indexOf("Tarek")); // 0
console.log(text.lastIndexOf("Tarek")); // 22

// charAt()
console.log(myName.charAt(6));
console.log(myName[2]);

// substring(start, end => Not Included)
console.log("Hello World".substring(0, 5));
console.log("Hello World".substring(6, 11));
console.log("Hello World".substring(0));
