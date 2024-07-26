//Task 1: Create a new div element with some text content and append it to the body

const newDiv = document.createElement("div");
newDiv.textContent = "Enroll Fast only few seats remaning..";
document.body.append(newDiv);

//Task 2: Create a new li element and add it to an existing ul list

const coursesList = document.querySelector(".courses");
const newLi = document.createElement("li");
newLi.textContent = "C++";
coursesList.append(newLi);
