/*
  JavaScript Dom Create & Append

  - createElement
  - createTextNode  
  - appendChild
  - append
*/

const ul = document.createElement("ul");
ul.setAttribute("class", "nav-list");

function createListItem(text) {
  const li = document.createElement("li");
  const listText = document.createTextNode(text);

  ul.appendChild(li);
  li.appendChild(listText);
}

document.body.appendChild(ul);

createListItem("Home");
createListItem("About");
createListItem("Services");
createListItem("Contact");

// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const li4 = document.createElement("li");

// const text1 = document.createTextNode("Home");
// const text2 = document.createTextNode("About");
// const text3 = document.createTextNode("Services");
// const text4 = document.createTextNode("Contact");

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);

// ul.append(li1, li2, li3, li4);

// li1.appendChild(text1);
// li2.appendChild(text2);
// li3.appendChild(text3);
// li4.appendChild(text4);

// console.log(ul);
