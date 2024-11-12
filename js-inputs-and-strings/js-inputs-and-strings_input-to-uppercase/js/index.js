console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
    const oldValue = firstInput.value;
    const newValue = oldValue.toUpperCase();
    firstInput.value = newValue
})