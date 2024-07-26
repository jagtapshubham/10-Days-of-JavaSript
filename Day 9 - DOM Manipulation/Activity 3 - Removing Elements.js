//Task 1: Select an HTML element and remove it from the DOM.
const paraElement = document.querySelector("p");
paraElement.remove();

//Task 2: Remove the last child of a specific HTML element.

const batch = document.querySelector(".batches");
batch.lastElementChild.remove();
