console.clear();

const box = document.querySelector('[data-js="box"]');
const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

colorInput.addEventListener("input", (event) => {
    box.style.background = `hsl(${colorInput.value} ,70%, 60%)`;
    console.log(box.style.background);
})

radiusInput.addEventListener("input", (event) => {
    box.style.borderRadius = `${radiusInput.value * 2}px`;
})

rotationInput.addEventListener("input", (event) => {
    box.style.transform = `rotate(${rotationInput.value}deg)`;
})