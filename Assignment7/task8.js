const dropdown = document.getElementById("dropdown");
const toggleBtn = document.getElementById("dropdown-toggle");
const options = document.getElementById("dropdown-options");
const selectedText = document.getElementById("selected-value");

toggleBtn.addEventListener("click", function () {
    options.hidden = !options.hidden;
    toggleBtn.setAttribute("aria-expanded", String(!options.hidden));
});

options.addEventListener("click", function (e) {
    const option = e.target.closest("button[data-value]");
    if (!option) return;

    toggleBtn.textContent = option.dataset.value;
    selectedText.textContent = "Selected: " + option.dataset.value;
    options.hidden = true;
    toggleBtn.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
        options.hidden = true;
        toggleBtn.setAttribute("aria-expanded", "false");
    }
}, true);