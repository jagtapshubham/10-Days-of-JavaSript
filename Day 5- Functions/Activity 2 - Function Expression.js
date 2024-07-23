// Task 1
function MaximumOf2Number(num1, num2) {
  if (num1 === num2) {
    console.log("Number are equal");
  } else if (num1 > num2) {
    console.log("Num1 is greater");
  } else {
    console.log("Num2 is greater");
  }
}

MaximumOf2Number(56, 98);

// Task 2

function Concatenate2Strings(string1, string2) {
  return `${string1} ${string2}`;
}

const concatString = Concatenate2Strings("Shubham", "Jagtap");
console.log(concatString);
