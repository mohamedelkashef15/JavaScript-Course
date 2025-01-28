/*
  Keyboard Events
    - keydown => Fired when a key is pressed down.
    - keyup => Fired when a key is released.
    - keypress (deprecated)
      Still Works (For Now)
      Not Recommended
      Might Be Removed in the Future:

    - Event Propreties 
      - key 
        Represents the actual character or value of the key pressed.
        
      - code
        Represents the physical key location on the keyboard.

      - keyCode
        Represents a numeric code corresponding to the physical key pressed
*/

//* keydown
const inputBox = document.getElementById("inputBox");

inputBox.addEventListener("keydown", (e) => {
  // console.log(`Key pressed: ${e.key}`);
  // console.log(`code: ${e.code}`);
});

//* keyup
inputBox.addEventListener("keyup", (e) => {
  // console.log(`Key pressed: ${e.key}`);
  // console.log(`code: ${e.code}`);
});

//* keypress
inputBox.addEventListener("keypress", (e) => {
  // console.log(`Key pressed: ${e.key}`);
  // console.log(`code: ${e.code}`);
});

//* Event properties
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert("You pressed Enter key");
  }

  if (e.keyCode === "65") {
    alert("You pressed A key");
  }

  if (e.code === "Digit1") {
    alert("You pressed number 1");
  }
});
