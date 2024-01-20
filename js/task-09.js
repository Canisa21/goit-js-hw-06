function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const changeColorButton = document.querySelector('button');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener("click", () => {
  let bodyColor = getRandomHexColor();
  body.style.backgroundColor = bodyColor;
  colorSpan.textContent = bodyColor;

});