/*
  JavaScript Dom Traversing

  * Elements
  - children  
  - firstElementChild
  - lastElementChild
  - nextElementSibling => next tag element inside parent
  - previousElementSibling
  - parentElement

  * Nodes
  - childNodes
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling
  - parentNode
*/

const navList = document.querySelector(".nav-list");
const secondListItem = document.querySelector("ul li:nth-child(2)");

console.log(navList.children);
console.log(navList.childNodes);
console.log(navList.childNodes[1].textContent);

console.log(navList.firstChild);
console.log(navList.lastChild);

console.log(secondListItem.nextSibling);
console.log(secondListItem.previousSibling);

console.log(secondListItem.parentNode);