// base-script.js

function loadInclude(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading include:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadInclude("base-header.html", "header");
  loadInclude("base-footer.html", "footer");
});
