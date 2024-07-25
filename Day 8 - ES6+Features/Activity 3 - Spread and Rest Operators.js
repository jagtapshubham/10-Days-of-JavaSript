//Task 1: Use the spread operator to create a new array that includes all elements of an existing array plus additional element and log the new array to the console.
//Note: Using spread operator we copy the all element of array.

const oldArray = [10, 20, 30, 40, 50];
let newArray = [...oldArray, 60, 70, 80, 90, 100];
console.log(newArray);

//Task 2: Use the rest operator in function to accept an arbitary number of arguments sum them and return the result.
//Note: Rest operator is used in function as argument to accept as many argument as we want

const sumUp = (...operator) => {
  return operator.reduce((prevValue, curValue) => prevValue + curValue);
};

console.log("Sum:", sumUp(10, 20, 30, 40, 50, -10));
