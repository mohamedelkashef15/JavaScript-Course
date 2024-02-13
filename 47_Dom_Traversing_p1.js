/*
  JavaScript Dom Traversing
    - Traversing means navigating from one element to another
    - It is used to find the parent, child, and siblings of an element
    - It is used to find the next and previous elements of an element
    - It is used to find the first and last child of an element
   
  - children  
  - firstElementChild
  - lastElementChild
  - nextElementSibling => next tag element inside parent
  - previousElementSibling
  - parentElement
*/

const navList = document.querySelector(".nav-list");
const secondListItem = document.querySelector("ul li:nth-child(2)");

console.log(navList.children);
console.log(navList.children[1].innerText);

console.log(navList.firstElementChild);
console.log(navList.lastElementChild);

console.log(secondListItem.previousElementSibling);
console.log(secondListItem);
console.log(secondListItem.nextElementSibling);

console.log(secondListItem.parentElement.parentElement);
