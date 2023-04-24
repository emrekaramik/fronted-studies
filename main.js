const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const number = document.querySelector("#number");

let initialNumber = 0;

increaseButton.addEventListener("click", () => {
  initialNumber++;
  number.innerHTML = `<i>${initialNumber}</i>`;
});

decreaseButton.addEventListener("click", () => {
  initialNumber--;
  number.innerHTML = `<i>${initialNumber}</i>`;
});
