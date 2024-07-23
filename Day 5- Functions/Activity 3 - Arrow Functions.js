// Task 1
const Sum = (num1, num2) => num1 + num2;

const result = Sum(45, 45);
console.log("Sum of number is", result);

// Task 2

const CheckCharacter = (string1, char) => {
  if (string1.includes(char)) {
    return true;
  } else {
    return false;
  }
};

const stringResult = CheckCharacter("Javascript", "s");
console.log(
  stringResult
    ? "String has the character"
    : "String does not contain the character"
);
