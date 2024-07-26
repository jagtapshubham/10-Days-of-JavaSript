//Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const changeTextBtn = document.getElementById("change-text-button");
const textLine = document.getElementById("text-content");
changeTextBtn.addEventListener("click", () => {
  if (textLine.textContent === "Window System") {
    textLine.textContent = "Welcome to Linux System!";
  } else {
    textLine.textContent = "Window System";
  }
});

//Task 2: Add a mouseover event listner to an element that changes its border color.

textLine.addEventListener("mouseover", () => {
  textLine.style.border = "2px solid red";
});

textLine.addEventListener("mouseout", () => {
  textLine.style.border = "";
});
