const box = document.getElementById("tracking-box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", function (e) {
    coordinates.textContent =
        "clientX: " + e.clientX + ", clientY: " + e.clientY;
});

box.addEventListener("dblclick", function (e) {
    const rect = box.getBoundingClientRect();
    const dot = document.createElement("span");

    dot.className = "dot";
    dot.style.left = (e.clientX - rect.left) + "px";
    dot.style.top = (e.clientY - rect.top) + "px";

    box.appendChild(dot);
});