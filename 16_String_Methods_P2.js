/*
  String Methods | P2
    - slice(start, end => Not included)
    - split()
    - repeat()
    - replace(search value, replace value)
    - replaceAll()
    - includes()
    - startsWith()
    - endsWith()
    - Chain Methods
*/

let text = "Hello World!",
  text2 = "Hello World! My name is Mohamed. Mohamed has 3 friends";

// console.log(text.length);
// console.log(text.charAt(text.length - 1));

// slice(start, end => Not included)
console.log(text.slice(0, 5)); // Hello
console.log(text.slice(-6, -1));
console.log(text.slice(-6));

// split()
console.log(text2.split("."));

// repeat()
console.log(text.repeat(3));

// replace(search value, replace value)
console.log(text2.replace("Mohamed", "Ahmed"));

// replaceAll(search value, replace value)
console.log(text2.replaceAll("Mohamed", "Ahmed"));

// includes()
console.log(text2.includes("Mohamed"));

// startsWith(substring, position or index)
console.log(text2.startsWith("W", 6));

// endsWith(substring, length)
console.log(text2.endsWith("o", 5));

// chain methods
console.log(text.substring(0, 5).toUpperCase());
