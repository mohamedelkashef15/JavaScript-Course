/*
  - Dom Manipulation 
    - window
    - document
    - getElementById();
    - innerHTML
    - getElementsByClassName();
    - getElementsByTagName();
    - querySelector();
    - querySelectorAll();
*/

console.log(window);
console.dir(document);

//* getElementById()
console.log(document.getElementById("main"));

const main = document.getElementById("main");
main.innerHTML = "<h1>Mohamed Elkashef</h1>";
console.log(main);

//* getElementsByClassName();
const listItem = document.getElementsByClassName("list-item");
console.log(listItem);
console.log(listItem);
console.log(listItem[2]);
listItem[2].innerHTML = "Products";

//* getElementsByTagName()
const p = document.getElementsByTagName("p");

console.log(p);
console.log(p[1]);

//* querySelector();
console.log(document.querySelector("#main"));
console.log(document.querySelector(".list-item"));
console.log(document.querySelector("p"));

//* querySelectorAll()
console.log(document.querySelectorAll(".list-item"));
console.log(document.querySelectorAll(".list-item")[3]);
console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("p")[0]);
