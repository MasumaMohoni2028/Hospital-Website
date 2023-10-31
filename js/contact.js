function showAlert() {
    alert("Thank you! Our team will reach to you soon!");
}

// Wait for the document to be fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element by its ID (assuming the button has an ID of "searchButton")
    var button = document.getElementById("submitButton");
    

    // Check if the button element exists
    if (button ) {
        // Add a click event listener to the button
        button.addEventListener("click", showAlert);
        
    }
});