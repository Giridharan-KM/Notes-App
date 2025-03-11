// Selecting "+" button, popup box, popup overlay.
var addbutton = document.getElementById("add-popup-button");
var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");

addbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting the Cancel button.
var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    event.preventDefault();
});

// Selecting container, add-book button, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container");
var addbook = document.getElementById("Add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Trimmed Input Values
    var title = booktitleinput.value.trim();
    var author = bookauthorinput.value.trim();
    var description = bookdescriptioninput.value.trim();

    // Validation Check: Show Warning if Empty
    if (title === "" || author === "" || description === "") {
        alert("Please fill in all fields before adding a note.");
        return;
    }

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2 contenteditable="false">${title}</h2>
        <h4 contenteditable="false">${author}</h4>
        <p contenteditable="false">${description}</p>
        <button onclick="editBook(event)">Edit</button>
        <button onclick="deleteBook(event)">Delete</button>
    `;

    container.append(div);

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

// Function to delete a note
function deleteBook(event) {
    event.target.parentElement.remove();
}

// Function to edit a note
function editBook(event) {
    var noteContainer = event.target.parentElement;
    var title = noteContainer.querySelector("h2");
    var author = noteContainer.querySelector("h4");
    var description = noteContainer.querySelector("p");

    if (event.target.textContent === "Edit") {
        // Make content editable
        title.contentEditable = "true";
        author.contentEditable = "true";
        description.contentEditable = "true";
        event.target.textContent = "Save";
        title.focus(); // Focus on title for quick editing
    } else {
        // Save changes
        title.contentEditable = "false";
        author.contentEditable = "false";
        description.contentEditable = "false";
        event.target.textContent = "Edit";
    }
}

// Theme Toggle Function
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
