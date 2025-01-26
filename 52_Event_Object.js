/*
  Event Object
    - Properties 
      - type => Determine what kind of event occurred to execute specific logic.
      - target => Refers to the element that triggered the event.
      - currentTarget => Refers to the element to which the event listener is attached
      - timeStamp => representing the time (in milliseconds) when the event occurred.

      - clientX => Horizontal position relative to "viewport". (Excluding scroll)
      - clientY => Vertical position relative to "viewport".

      - pageX => Horizontal position relative to document
      - pageY => Vertical position relative to document

      - offsetX => Horizontal position relative to target element
      - offsetY => Vertical position relative to target element

      - screenX => Horizontal position relative to screen
      - screenY => Vertical position relative to screen
*/

const container = document.querySelector(".container");
const title = document.querySelector(".title");

//* type
document.addEventListener("click", (e) => {
  // console.log(e.type);
});

//* target
document.addEventListener("click", (e) => {
  // console.log(e.target);
});

//* currentTarget
container.addEventListener("click", (e) => {
  // console.log(e.currentTarget);
});

//* timeStamp
document.addEventListener("click", (e) => {
  // console.log(e.timeStamp);
});

//* clientX
document.addEventListener("click", (e) => {
  // console.log(`Mouse X(client): ${e.clientX}`);
});

//* clientY
document.addEventListener("click", (e) => {
  // console.log(`Mouse Y(client): ${e.clientY}`);
});

//* pageX
document.addEventListener("click", (e) => {
  // console.log(`Mouse X(page): ${e.pageX}`);
});

//* pageY
document.addEventListener("click", (e) => {
  // console.log(`Mouse Y(page): ${e.pageY}`);
});

//* offsetX
title.addEventListener("click", (e) => {
  // console.log(`Mouse X(offset): ${e.offsetX}`);
});

//* offsetY
title.addEventListener("click", (e) => {
  // console.log(`Mouse Y(offset): ${e.offsetY}`);
});

//* screenX
document.addEventListener("click", (e) => {
  console.log(`Mouse X(screen): ${e.screenX}`);
});

//* screenY
document.addEventListener("click", (e) => {
  console.log(`Mouse Y(screen): ${e.screenY}`);
});
