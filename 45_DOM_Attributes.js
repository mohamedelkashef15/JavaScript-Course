/*
  JavaScript DOM Manipulation 
    - getAttribute()
    - setAttribute()
    - removeAttribute()
    - hasAttribute()
*/

const myLink = document.querySelector(".main-link");
const firstParagraph = document.querySelector("p");

console.log(myLink);

//* getAttribute("attribute name")
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

//* setAttribute()
myLink.setAttribute("target", "_blank");
myLink.setAttribute("title", "Elkashef site");

//* removeAttribute()
myLink.removeAttribute("title");
console.log(myLink);

//* hasAttribute()
console.log(myLink.hasAttribute("target"));
console.log(myLink.hasAttribute("title"));
console.log(firstParagraph);

// practical example
firstParagraph.addEventListener("click", () => {
  firstParagraph.setAttribute("data-green", "");
  console.log(firstParagraph);

  if (firstParagraph.hasAttribute("data-green")) {
    firstParagraph.style.color = "green";
  }
});
