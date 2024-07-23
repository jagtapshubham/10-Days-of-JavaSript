// Task 1
const mapArray = [1, 2, 3, 4, 5, 6];
console.log("Array", mapArray);
const doubleArray = mapArray.map((num) => num * 2);
console.log("DoubleArray", doubleArray);

// Task 2
const array = [10, 11, 12, 13, 14, 15];
console.log("Array", array);
const filteredArray = array.filter((num) => num % 2 === 0);
console.log("Even number array", filteredArray);

// Task 3
const array1 = [100, 200, 300, 400, 500];
console.log("Array", array1);
const reduceArray = array1.reduce(
  (prevValue, curValue) => prevValue + curValue
);
console.log("Reduce array sum", reduceArray);
