const loginForm = document.querySelector(".login-form");
const logEmail = document.querySelector('[name="email"]');
const logPassword = document.querySelector('[name="password"]');
const logButton = document.querySelector('button');

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const logEmail = form.elements.email;
    const logPassword = form.elements.password;

if (logEmail.value === '' || logPassword.value === '') {
    alert("Fill in all the fields, please.")
}

const loginData = {
[logEmail.name]: logEmail.value,
[logPassword.name]: logPassword.value,
};
console.log(loginData);
form.reset();
})