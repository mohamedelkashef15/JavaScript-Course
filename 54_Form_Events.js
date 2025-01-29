/*
  Form Events
    - submit
      - triggered when the form is submitted.

    - reset
      - Display a message or log when the form is cleared.
      
    - change
      - Detect when a user changes a dropdown selection.

    - input
      - works every time the user types in an input field.
    
    - foucs & blur
      - Highlighting an input field when a user starts typing.
*/

const formSubmit = document.getElementById("formSubmit");
const formReset = document.getElementById("formReset");
const country = document.getElementById("country");

const inputSubmit = document.getElementById("inputSubmit");
const liveInput = document.getElementById("liveInput");
const output = document.getElementById("output");
const email = document.getElementById("email");

//* submit
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("Submitted");
  console.log(inputSubmit.value);
});

//* reset
formReset.addEventListener("reset", () => {
  alert("Form has been cleared!");
});

//* change
country.addEventListener("change", (e) => {
  console.log(`You selected ${e.currentTarget.value}`);
});

//* input
liveInput.addEventListener("input", (e) => {
  output.innerText = e.currentTarget.value;
});

//* foucs & blur
email.addEventListener("focus", (e) => {
  e.currentTarget.style.backgroundColor = "#e0f7fa";
});

email.addEventListener("blur", (e) => {
  e.currentTarget.style.backgroundColor = "";
});
