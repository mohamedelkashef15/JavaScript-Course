/*
  JavaScript DOM Manipulation 
   innerHTML
    - Allows you to get or set HTML content of an element including HTML Tags

   innerText
    - return text content exluding HTML Tags without spacing
    - Take into account CSS styling except text visully hidden 

   textContent
    - return text content exluding HTML Tags with spacing
    - ignore CSS styling 
*/

const firstParagraph = document.querySelector("p");

console.log(firstParagraph);

//* innerHTML
console.log(firstParagraph.innerHTML);
// firstParagraph.innerHTML = "<h3>heading 3</h3>";

//* innerText
console.log(firstParagraph.innerText);

//* textContent
console.log(firstParagraph.textContent);
