// index.js

// Function to show an alert message
function showAlert() {
    alert("Welcome to MN Hospital!");
}

// Wait for the document to be fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element by its ID (assuming the button has an ID of "searchButton")
    var button = document.getElementById("loginButton");
    var button1 = document.getElementById("signupButton");
    var button2 = document.getElementById("homeNavItem");

    // Check if the button element exists
    if (button || button1 || button2) {
        // Add a click event listener to the button
        button.addEventListener("click", showAlert);
        button1.addEventListener("click", showAlert);
        button1.addEventListener("click", showAlert);
    }
});
