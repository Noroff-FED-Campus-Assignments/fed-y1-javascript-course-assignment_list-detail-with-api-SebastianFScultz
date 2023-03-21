const form = document.querySelector(".form-container");
const name = document.querySelector("#name");
const firstNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 10) === true) {
        nameError.style.display = "none";
        
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function submitForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 10) === true && validateEmail(email.value) === true && checkLength(address.value, 25) === true) {
    message.innerHTML = '<div class="message">Success!</div>';
   
    form.reset();
    }
    
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}