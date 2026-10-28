const searchBox = document.getElementById("search-input");
const rows = document.querySelectorAll("#student-rows tr");
const noResults = document.getElementById("no-results");

searchBox.addEventListener("input", function () {
    const search = searchBox.value.toLowerCase().trim();
    let found = 0;

    rows.forEach(function (row) {
        const text = row.textContent.toLowerCase();

        if (text.includes(search)) {
            row.hidden = false;
            found++;
        } else {
            row.hidden = true;
        }
    });

    noResults.hidden = found !== 0;
});