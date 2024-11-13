console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data ", data);
  console.log("Valid operation is ", data.operator);
  switch (data.operator) {
    case "addition":
      result = add(parseInt(data.numberA), parseInt(data.numberB));
      break;
    case "subtraction":
      result = subtract(parseInt(data.numberA), parseInt(data.numberB));
      break;
    case "multiplication":
      result = multiply(parseInt(data.numberA), parseInt(data.numberB));
      break;
    case "division":
      result = divide(parseInt(data.numberA), parseInt(data.numberB));
      break;
    default:
      result = "Sorry something went wrong. Give it another try!";
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
