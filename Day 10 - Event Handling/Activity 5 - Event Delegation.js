//Task 1: Add a click listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.querySelector("ul");

ul.addEventListener("click", (event) => {
  console.log(event.target.innerText);
});

//Task 2: Add an event listener to parent element that listens for events from dynamically added child elements.
document.addEventListener("DOMContentLoaded", () => {
  const parent = document.getElementById("parent");
  const addChildButton = document.getElementById("add-child");

  parent.addEventListener("click", (event) => {
    if (event.target && event.target.matches(".child")) {
      console.log("Child element clicked:", event.target);
    }
  });

  addChildButton.addEventListener("click", () => {
    const newChild = document.createElement("div");
    newChild.className = "child";
    newChild.textContent = "I am a new child element";
    parent.appendChild(newChild);
  });
});
