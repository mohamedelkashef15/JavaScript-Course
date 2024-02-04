/*
  - Dom Manipulation 
*/

console.log(document.documentElement);
console.log(document.head);
console.log(document.title);
console.log(document.body);

console.log(document.head.children);
console.log(document.head.children[0]);
console.log(document.body.children);
console.log(document.body.children[2]);

console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].href);
document.links[0].href = "https://github.com";

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].Name);
console.log(document.forms[0].Email);

console.log(document.images);
console.log(document.images[0]);
console.log(document.images[0].alt);
console.log(document.images[0].src);
