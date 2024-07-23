// Task 1

function EvenOddNumberCheck(number) {
  if (number % 2 == 0) {
    console.log(`${number} is Even number`);
  } else {
    console.log(`${number} is odd number`);
  }
}

EvenOddNumberCheck(34);

// Task 2

function SquareOfNumber(number) {
  return number * number;
}

let number = 5;
const result = SquareOfNumber(number);
console.log(`Square of ${number} is`, result);
