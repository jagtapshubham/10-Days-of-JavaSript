// Task 1: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.

const library = {
  Shelf1: {
    name: "shelf1",
    book: [
      { title: "Javascript", author: "Max" },
      {
        title: "C Programming",
        author: "Dennis Ritchie",
      },
    ],
  },
  Shelf2: {
    name: "shelf2",
    book: [
      {
        title: "C++ Programming",
        author: "Bjarne Stroustrup",
      },
      {
        title: "UNIX System Design",
        author: "Mourice J Bach",
      },
    ],
  },
};

console.log(library);

// Task 2: Access and log the name of the library and the titles of all the books in the library.

for (let key in library) {
  console.log("Library name:", library[key].name);
  library[key].book.forEach((book) => {
    console.log("Title of book:", book.title);
  });
}
