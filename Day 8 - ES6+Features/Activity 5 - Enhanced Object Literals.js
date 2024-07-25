//Task 1: Use enhanced object literals to create an object with methods and properties and log the object to the console.
const book = {
  title: "Javascript",
  author: "Max",
  year: 2024,
  info: function () {
    console.log(`This ${title} is written by ${author} in ${year}.`);
  },
};

console.log(book);

//Task 2: Create an object with computed property names based on variables and log the object to the console.
const property1 = "name";
const property2 = "age";

const userName = "Shubham";
const userAge = 24;

const user = {
  [property1]: userName,
  [property2]: userAge,
};

console.log(user);
