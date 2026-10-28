const textArea = document.getElementById("message");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("reset-button");
const maxLength = 100;

textArea.addEventListener("keydown", function (e) {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight",
        "ArrowUp", "ArrowDown", "Tab", "Home", "End"
    ];

    if (
        textArea.value.length >= maxLength &&
        !allowedKeys.includes(e.key) &&
        !e.ctrlKey &&
        !e.metaKey &&
        textArea.selectionStart === textArea.selectionEnd
    ) {
        e.preventDefault();
    }
});

textArea.addEventListener("input", function () {
    const remaining = maxLength - textArea.value.length;

    counter.textContent = remaining + " characters remaining";
    counter.style.color = remaining === 0
        ? "red"
        : remaining <= 20
        ? "orange"
        : "green";
});

resetBtn.addEventListener("click", function () {
    textArea.value = "";
    counter.textContent = "100 characters remaining";
    counter.style.color = "green";
});