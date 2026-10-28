const buttons = document.querySelectorAll("[data-theme-choice]");
const themeText = document.getElementById("current-theme");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const theme = button.dataset.themeChoice;

        document.body.setAttribute("class", "theme-" + theme);
        document.body.setAttribute("data-theme", theme);

        themeText.textContent = theme;
    });
});