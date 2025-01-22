/*
  JavaScript DOM Events

  - 3 ways of adding events
    - inline 
    - DOM Property 
    - addEventListener
*/

//* inline
function clicked() {
  console.log("Hello from JavaScript");
}

//* Dom Property
const btn = document.querySelector(".btn");

btn.onclick = function () {
  console.log("first Click");
};

// overwrite
btn.onclick = function () {
  alert("second Click");
};

//* addEventListener

function clicked() {
  console.log("first click");
}

btn.addEventListener("click", clicked);

// btn.addEventListener("click", function () {
//   alert("second Click");
// });

// Arrow Function
btn.addEventListener("click", () => alert("second Click"));
