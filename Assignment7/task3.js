const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("next-button");
const backBtn = document.getElementById("back-button");
const form = document.getElementById("registration-form");
const summary = document.getElementById("summary");
const stepLabel = document.getElementById("step-label");

let currentStep = 0;

function showStep(index) {
    steps.forEach(function (step, i) {
        step.classList.toggle("active", i === index);
    });

    currentStep = index;
    stepLabel.textContent = "Step " + (index + 1) + " of 3";
    backBtn.hidden = index === 0;
    nextBtn.textContent = index === 2 ? "Finish" : "Next";
}

nextBtn.addEventListener("click", function () {
    const input = steps[currentStep].querySelector("input");
    const error = document.getElementById(input.id + "-error");

    if (!input.checkValidity() || input.value.trim() === "") {
        error.textContent = "Please enter a valid value.";
        input.focus();
        return;
    }

    error.textContent = "";

    if (currentStep < 2) {
        showStep(currentStep + 1);
    } else {
        document.getElementById("summary-name").textContent =
            "Name: " + document.getElementById("name").value;

        document.getElementById("summary-email").textContent =
            "Email: " + document.getElementById("email").value;

        form.hidden = true;
        stepLabel.hidden = true;
        summary.hidden = false;
    }
});

backBtn.addEventListener("click", function () {
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
});

form.addEventListener("input", function (e) {
    const error = document.getElementById(e.target.id + "-error");
    if (error) error.textContent = "";
});

showStep(0);