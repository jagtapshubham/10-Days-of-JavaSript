//Task 1: Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.getElementById("keydown");

inputField.addEventListener("keydown", (event) => {
  console.log(event.key);
});

//Task 2: Add a keyup event listener to an input field that displays the current value in a paragraph.
const inputFieldUp = document.getElementById("keyup");
const paraOutput = document.getElementById("event-output");
inputFieldUp.addEventListener("keyup", (event) => {
  console.log(event.key);
  paraOutput.textContent = event.key;
});
