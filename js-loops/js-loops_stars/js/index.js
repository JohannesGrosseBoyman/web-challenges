console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let i = 1; i < 6; i++) {
    const img = document.createElement("img");
    const type = i <= filledStars ? "filled" : "empty";
    img.src = `assets/star-${type}.svg`;
    img.addEventListener("click", () => {
      renderStars(i);
      console.log(i);
    });
    /*  if (i <= filledStars) {
        img.src =  `assets/star-filled.svg`
        starContainer.appendChild(img);
      } else {
        img.src = `assets/star-empty.svg`; */
    starContainer.appendChild(img);
  }
}

// --^-- write or modify code above this line --^--
const main = document.querySelector("main");
// main.style.backgroundColor = "red";
main.addEventListener("click", () => {
  main.style.backgroundColor =
    main.style.backgroundColor === "red" ? "darkslateblue" : "red";
});

starContainer.addEventListener("click", () => {
  starContainer.style.backgroundColor =
    starContainer.style.backgroundColor === "green"
      ? "rgb(252, 252, 252)"
      : "green";
});

renderStars();
