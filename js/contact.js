function showAlert() {
    alert("Thank you! Our team will reach to you soon!");
}


document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("submitButton");
    

    
    if (button ) {
        button.addEventListener("click", showAlert);
        
    }
});