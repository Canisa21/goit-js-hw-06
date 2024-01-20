const inputControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

textSpan.style.fontSize = '50px'
const changeFontSize = () => {
const currentSize = parseInt(inputControl.value);
textSpan.style.fontSize = `${currentSize}px`;
};
inputControl.addEventListener("input", changeFontSize);
