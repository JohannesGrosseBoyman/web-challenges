console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successDiv = document.querySelector(`[data-js="success"]`);

successDiv.setAttribute("hidden", "");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  if (event.target.tos.checked) {
    console.log("tos.checked? ", event.target.tos.checked);
    hideTosError();
    alert("Form submitted");
    successDiv.removeAttribute("hidden");
  } else {
    console.log("tos.checked? ", event.target.tos.checked);
    showTosError();
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked) {
    console.log("tos.checked? ", event.target.checked);
    hideTosError();
  } else {
    console.log("tos.checked? ", event.target.checked);
    showTosError();

    return;
  }
});
