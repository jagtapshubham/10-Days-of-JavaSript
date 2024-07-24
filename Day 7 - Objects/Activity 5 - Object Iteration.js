// Task 1: Use a for...in loop to iterate over the properties of the book object and log the each property and its value.

const book = {
  title: "Javascript",
  author: "Max",
  year: 2024,
  title1: "C Programming",
  author1: "Dennis Ritchie",
  year1: 2016,
};
for (let key in book) {
  console.log(`${key}:${book[key]}`);
}

// Task 2: Use Object.keys and Object.values method to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));
