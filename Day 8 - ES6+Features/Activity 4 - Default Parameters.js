//Task 1: Write a function that takes two parameters and return their product with the second parameter having a default value of 1.Log the result of calling this function with and withour the second parameter.

const productUp = (para1, para2 = 1) => {
  return para1 * para2;
};

const withPara2 = productUp(10, 20);
console.log("With parameter 2 passed:", withPara2);

const withoutPara2 = productUp(20);
console.log("Without parameter 2 passed:", withoutPara2);
