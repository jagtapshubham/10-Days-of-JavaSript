// Task 1 : Print pattern
const lineLimit = 5;

for (let i = 1; i <= lineLimit; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
