const validationInput = document.querySelector("#validation-input");
const validLength = parseInt(validationInput.dataset.length);
const afterBlur = (event) => {
    event.preventDefault();
    if (validationInput.value.length === validLength) {
        validationInput.classList.toggle('valid', true);
        validationInput.classList.toggle('invalid', false);
    } else if (validationInput.value.length !== validLength) {
        validationInput.classList.toggle('valid', false);
        validationInput.classList.toggle('invalid', true);
    }
    else if (validationInput.value === '') {
        validationInput.classList.remove('valid', 'invalid');
    };
}
validationInput.addEventListener("blur", afterBlur);