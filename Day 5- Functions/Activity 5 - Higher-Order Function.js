// Task 1
function CallAFunction(CallingFunction, num) {
  console.log("Calling Function from here");
  CallingFunction(CallingFunction, num);
}

function CallingFunction(CallingFunction, num) {
  if (num === 0) {
    return;
  }
  console.log("Function Called times", num);
  num--;
  CallingFunction(CallingFunction, num);
}

CallAFunction(CallingFunction, 5);

// Task 2
function HigherOrderFunction(Double, Square, number) {
  const doubleResult = Double(number);
  const squareResult = Square(doubleResult);
  return squareResult;
}

const Double = (num) => num * 2;
const Square = (num) => num * num;

const result = HigherOrderFunction(Double, Square, 3);
console.log("Double and Square of number 3 is", result);
