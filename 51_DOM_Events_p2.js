/*
  Mouse Events
    - click
    - dblclick
    - mouseover & mouseout
    - mousedown & mouseup
    - mouseleave
    - contextmenu
    - dargstart, drag, dragend
*/

const btn = document.getElementById("btn");
const text = document.querySelector(".text");
const box = document.querySelector(".box");
const pressBtn = document.querySelector(".press");
const boxImg = document.querySelector(".box-img");
//* click
btn.addEventListener("click", function () {
  console.log("Clicked");
});

//* dblclick
text.addEventListener("dblclick", function () {
  text.style.color = "blue";
});

//* mouseover & mouseout
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "red";
  // console.log("Mouse Left the box from inside");
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightgray";
});

//* mousedown & mouseup
pressBtn.addEventListener("mousedown", function () {
  pressBtn.style.backgroundColor = "red";
  pressBtn.textContent = "Holding";
});

pressBtn.addEventListener("mouseup", function () {
  pressBtn.style.backgroundColor = "green";
  pressBtn.textContent = "relesed";
});

//* mouseleave
box.addEventListener("mouseleave", function () {
  // console.log("Mouse Left the box from boundries");
});

//* contextmenu
box.addEventListener("contextmenu", function () {
  console.log("Right click");
});

//* dargstart, drag, dragend
boxImg.addEventListener("dragstart", function () {
  console.log("drag start");
});
boxImg.addEventListener("drag", function () {
  console.log("dragging...");
});
boxImg.addEventListener("dragend", function () {
  console.log("drag end");
});
