// Activity 1: If-else Statements

let num = 10;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is 0");
}

const age = 18;

if (age >= 18) {
  console.log("Person is eligible for voting");
} else if (age < 18) {
  console.log("Person is not eligible for voting");
} else {
  console.log("Enter a valid number");
}

// Activity 2: Nested If-Else Statements

const gender = "male";
const age1 = 18;

if (gender === "male") {
  if (age1 >= 18) {
    console.log("Person is male and eligible for participation");
  } else {
    console.log("Person's age doesn't fit the criteria");
  }
} else if (gender === "female") {
  if (age1 >= 18) {
    console.log("Person is female and eligible for participation");
  } else {
    console.log("Person's age doesn't fit the criteria");
  }
} else {
  console.log("Please enter valid information");
}

// Activity 3: Switch Case

const day = 4;

switch (day) {
  case 1:
    console.log("The day is Monday");
    break;
  case 2:
    console.log("The day is Tuesday");
    break;
  case 3:
    console.log("The day is Wednesday");
    break;
  case 4:
    console.log("The day is Thursday");
    break;
  case 5:
    console.log("The day is Friday");
    break;
  case 6:
    console.log("The day is Saturday");
    break;
  case 7:
    console.log("The day is Sunday");
    break;
  default:
    console.log("Enter valid number from 1-7 week days");
    break;
}

const marks = 74.91;

switch (true) {
  case marks > 0 && marks < 35:
    console.log("Grade F");
    break;
  case marks > 35 && marks < 60:
    console.log("Grade E");
    break;
  case marks >= 35 && marks < 60:
    console.log("Grade D");
    break;
  case marks >= 60 && marks < 70:
    console.log("Grade C");
    break;
  case marks >= 70 && marks < 80:
    console.log("Grade B");
    break;
  case marks >= 80 && marks <= 100:
    console.log("Grade A");
    break;
  default:
    console.log("Invalid marks");
}

// Activity 4: Conditional(Ternary) Operator

const number = 89;

console.log(`${number} number is`, number % 2 === 0 ? "Even" : "Odd");

// Activity 5: Combining Conditions

const year = 2000;

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
