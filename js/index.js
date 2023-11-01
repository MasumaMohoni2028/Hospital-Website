

// Function to show an alert message
function showAlert() {
    alert("Welcome to MN Hospital!");
}


document.addEventListener("DOMContentLoaded", function () {
    
    var button = document.getElementById("loginButton");
    var button1 = document.getElementById("signupButton");
    var button2 = document.getElementById("homeNavItem");

    
    if (button || button1 || button2) {
        button.addEventListener("click", showAlert);
        button1.addEventListener("click", showAlert);
        button1.addEventListener("click", showAlert);
    }
});
