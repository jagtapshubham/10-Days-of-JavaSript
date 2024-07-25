// Task 1: Use array destructuring to extract the first and second element from an array of numbers and log them to console.

const array = [10, 20, 30, 40, 50, 60];

let [firstNumber, secondNumber] = array;
console.log("First element of array:", firstNumber);
console.log("Second element of array:", secondNumber);

// Task 2: Use object destructuring to extract the title and author from a book object and log them to console.

const book = {
  title: "Javascript",
  author: "Max",
  year: 2024,
};

const { title, author } = book;
console.log("Title:", title);
console.log("Author:", author);
