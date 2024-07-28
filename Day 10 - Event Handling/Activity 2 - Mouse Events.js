//Task 1: Add a mouseover event listener ti an element that changes its background color.
const textBgColor = document.getElementById("background-color");

textBgColor.addEventListener("mouseover", () => {
  textBgColor.style.backgroundColor = "orange";
});

//Task 2: Add a mouseout event listener ti an element that resets its background color.

textBgColor.addEventListener("mouseout", () => {
  textBgColor.style.backgroundColor = "";
});
