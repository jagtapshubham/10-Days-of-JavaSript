// Task 1: Add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result of calling this method.
const book = {
  title: "Javascript",
  author: "Max",
  year: 2024,
  info() {
    return `Book ${this.title} published in ${this.year}.`;
  },
};

console.log(book.info());
