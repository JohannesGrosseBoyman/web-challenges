console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data", data);
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      parseInt(data.age) + parseInt(data.badness)
    }`
  );
  event.target.elements.firstName.focus();
  event.target.reset();
});
