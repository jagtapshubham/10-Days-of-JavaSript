//Task 1: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
});

//Task 2: Add a change event listener to a select dropdown that displays the selected value in paragraph.
const expSelect = document.getElementById("experience-select");
const displaySelect = document.getElementById("select-value");

expSelect.addEventListener("change", (event) => {
  console.log(event);
  displaySelect.textContent = event.target.value;
});
