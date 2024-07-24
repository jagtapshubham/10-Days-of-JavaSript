// Task 1: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

const book = {
  title: "UNIX System design",
  author: "Mores J Bach",
  info() {
    return `Book ${this.title} by author ${this.author}.`;
  },
};
console.log(book.info());
console.log(book);

// Task 2: Add a method to the book object that takes a parameter year and updates the book's year property, then log the updated object.

let book1 = {
  title: "Data Structure and Algorithms",
  author: "Sartaj sahani",
  year: 2020,
  UpdateYear(year1) {
    this.year = year1;
  },
};
console.log("Book with old year", book1);
book1.UpdateYear(2024);
console.log("Book with new year", book1);
