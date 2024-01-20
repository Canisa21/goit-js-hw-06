const currentValue = document.querySelector("#value");
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
function valueUp () {
    counterValue += 1;
    currentValue.textContent = counterValue;
};
function valueDown () {
    counterValue -= 1;
    currentValue.textContent = counterValue;
};
incrementButton.addEventListener("click", valueUp);
decrementButton.addEventListener("click", valueDown);