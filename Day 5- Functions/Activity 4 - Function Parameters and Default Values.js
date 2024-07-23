// Task 1
function ProductOfNumbers(num1, num2 = 10) {
  return num1 * num2;
}

const productResult = ProductOfNumbers(5);
console.log("Product of number with default parameter is", productResult);

// Task 2

const GreetMessage = (name, age = 18) => `Hello ${name} your age is ${age}.`;

const greetMsg = GreetMessage("Shubham");
console.log(greetMsg);
