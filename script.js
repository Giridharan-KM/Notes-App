// Selecting "+" button, popup box, popup overlay.
var addbutton = document.getElementById("add-popup-button")
var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".popup-overlay")

addbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
})

// Selecting the Cancel button.
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function(event) {
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    event.preventDefault()
})

// Selecting container, add-book button, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("Add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click", function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
                    <h4> ${ bookauthorinput.value}</h4>
                    <p>${bookdescriptioninput.value} </p>
                    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    document.getElementById("book-title-input").value = "";
    document.getElementById("book-author-input").value = "";
    document.getElementById("book-description-input").value = "";
})

function deletebook(event) {
    event.target.parentElement.remove()
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode"); // Toggle class
    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme); // Save theme in local storage
}

// Apply saved theme when the page loads
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
