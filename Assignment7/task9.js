const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("success-message");

function validateField(input) {
    const error = document.getElementById(input.id + "-error");
    const value = input.value.trim();
    let message = "";

    if (input.id === "name" && value === "") {
        message = "Name is required.";
    } else if (input.id === "email" && value === "") {
        message = "Email is required.";
    } else if (input.id === "email" && !value.includes("@")) {
        message = "Email must contain @.";
    } else if (input.id === "password" && value.length < 6) {
        message = "Password must contain at least 6 characters.";
    }

    error.textContent = message;
    return message === "";
}

const fields = [nameInput, emailInput, passwordInput];

fields.forEach(function (input) {
    input.addEventListener("input", function () {
        validateField(input);
        successMessage.hidden = true;
    });
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
        successMessage.hidden = true;
        return;
    }

    successMessage.textContent = "Form Submitted Successfully";
    successMessage.hidden = false;
    form.reset();

    fields.forEach(function (input) {
        document.getElementById(input.id + "-error").textContent = "";
    });
});