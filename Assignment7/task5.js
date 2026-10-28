const gallery = document.getElementById("gallery");
const modal = document.getElementById("image-modal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modal-image");
const caption = document.getElementById("modal-caption");
const closeBtn = document.getElementById("close-modal");

gallery.addEventListener("click", function (e) {
    if (e.target.tagName !== "IMG") return;

    modalImage.src = e.target.src;
    modalImage.alt = e.target.alt;
    caption.textContent = e.target.alt;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
});

modalContent.addEventListener("click", function (e) {
    e.stopPropagation();
});

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

modal.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
});