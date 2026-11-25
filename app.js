
function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerHTML = message;
    toast.className = "show";

    setTimeout(function() {
        toast.className = "";
    }, 3000);
}

function bookTicket() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Please fill in your ticket booking details!");
}
