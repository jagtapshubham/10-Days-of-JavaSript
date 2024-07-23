// Task 1
const twoDimensionalArray = [
  [1, 2, 3],
  [11, 12, 13],
  [21, 22, 23],
];

twoDimensionalArray.forEach((row) => {
  row.forEach((element) => {
    console.log(element);
  });
});

// Task 2
const twoDArray = [
  [1, 2, 3],
  [11, 12, 13],
  [21, 22, 23],
];
const search = 22;
let row = 0,
  column = 0;

function findElementIn2dArray(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) {
        row = i;
        column = j;
        return true;
      }
    }
  }
  return false;
}

const found = findElementIn2dArray(twoDArray, search);

found
  ? console.log(`Element found at row${row} column${column}`)
  : console.log("Element not found");
