const form = document.getElementById("product-form");
const productInput = document.getElementById("product-input");
const productList = document.getElementById("product-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = productInput.value.trim();

    if (product === "") return;

    const li = document.createElement("li");
    const name = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    name.textContent = product;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    editBtn.dataset.action = "edit";
    deleteBtn.dataset.action = "delete";

    li.append(name, editBtn, deleteBtn);
    productList.appendChild(li);

    productInput.value = "";
});

productList.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    const li = btn.parentElement;

    if (btn.dataset.action === "delete") {
        li.remove();
    } else if (btn.dataset.action === "edit") {
        const name = li.querySelector("span");
        const input = document.createElement("input");

        input.value = name.textContent;
        name.replaceWith(input);
        input.focus();

        function save() {
            const newName = document.createElement("span");
            newName.textContent = input.value.trim() || name.textContent;
            input.replaceWith(newName);
        }

        input.addEventListener("blur", save, { once: true });

        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") input.blur();
        });
    }
});