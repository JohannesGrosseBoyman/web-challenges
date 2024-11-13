console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();
  const newEntry = document.createElement("li"); //1
  toastContainer.appendChild(newEntry); //2
  newEntry.classList.add("toast-container__message");
  newEntry.textContent = "I am another toast message";
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  event.preventDefault();
  while (toastContainer.hasChildNodes)
    toastContainer.removeChild(toastContainer.children[0]);
});
