//Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const changeTextButton = document.getElementById("change-text-button");
const text = document.getElementById("text-content");

changeTextButton.addEventListener("click", () => {
  if (text.textContent === "Change this text on by below button") {
    text.textContent = "Hello, Welcome to Javascript learning.";
  } else {
    text.textContent = "Change this text on by below button";
  }
});

//Task 2: Add a double-click event listener to an image that toggles its visibility.

const imageClick = document.getElementById("magician-image");

imageClick.addEventListener("dblclick", () => {
  imageClick.style.visibility = "hidden";
});
