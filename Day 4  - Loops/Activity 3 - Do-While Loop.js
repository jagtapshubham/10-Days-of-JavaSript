// Task 1
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Task 2
console.log("\n");
let num = 5;
let j = 1;
let factorial = 1;
do {
  factorial *= j;
  j++;
} while (j <= num);

console.log(`Factorial of ${num} is`, factorial);
