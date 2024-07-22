// Activity 1: Arithmetic Operator

function ArithmeticOperators(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error Division by zero";
    case "%":
      return num1 % num2;
  }
}

const add = ArithmeticOperators(10, 30, "+");
console.log("Add:", add);

const subtract = ArithmeticOperators(100, 30, "-");
console.log("Add:", subtract);

const multiplication = ArithmeticOperators(10, 30, "*");
console.log("Add:", multiplication);

const division = ArithmeticOperators(10, 30, "/");
console.log("Add:", add);

const modules = ArithmeticOperators(11, 5, "%");
console.log("Modules(Remainder):", modules);

// Activity 2: Assignment Operators

let num1 = 70,
  num2 = 40;

num1 += num2;
console.log("Add", num1);

num1 -= num2;
console.log("Sub", num1);

// Activity 3: Comparison Operator

let value1 = 10,
  value2 = 20;

if (value2 > value1) {
  console.log("Value 2 is greater");
}
if (value2 < value1) {
  console.log("Value2 1 is greater");
}

value1 = 10;
value2 = 10;

if (value2 >= value1) {
  console.log("Value 2 is greater");
}
if (value2 <= value1) {
  console.log("Value2 1 is greater");
}

if (value1 === value2) {
  console.log("Both value are same");
}
value1 = "10";
if (value1 == value2) {
  console.log("Values are not equal because of value type are different");
}

// Activity 4: Logical Operator

let bolValue1 = true;
let bolValue2 = true;

if (bolValue1 && bolValue2) {
  console.log("Both values are true");
}

bolValue1 = true;
bolValue2 = false;
if (bolValue1 && bolValue2) {
  console.log("1 values are false");
}

bolValue1 = true;
bolValue2 = false;
if (bolValue1 || bolValue2) {
  console.log("1 values are false & 1 value is true");
}

bolValue1 = true;
bolValue2 = false;
if (bolValue1 != bolValue2) {
  console.log("Values are not equal");
}

// Activity 5: Ternary Operator

console.log("Ternary Operator result:", bolValue1 ? true : false);
