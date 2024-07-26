//Task 1: Select an HTML element and change one of its attribute(e.g., src of an img tag).

const image = document.querySelector("img");
image.setAttribute(
  "src",
  "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-coder-clipart-boy-working-with-computer-game-on-the-desk-vector-png-image_6804917.png"
);

//Task 2: Add and remove a CSS class to.from an HTML element.

const quoteElement = document.querySelector(".quote");
quoteElement.className = "quote-color";

const quoteElement1 = document.querySelector(".linux-quote-color");
quoteElement1.classList.remove("linux-quote-color");
