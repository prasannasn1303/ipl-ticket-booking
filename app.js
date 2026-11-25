

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


const matchSelect = document.getElementById("match");

const standSelect = document.querySelector("#stand");

const quantityInput = document.getElementById("quantity");



const ticketPrices = {

    "RCB vs CSK": {
        "General": 800,
        "Premium": 1500,
        "VIP": 3000
    },

    "MI vs KKR": {
        "General": 1000,
        "Premium": 2000,
        "VIP": 4000
    },

    "KKR vs RCB": {
        "General": 900,
        "Premium": 1800,
        "VIP": 3500
    },

    "DC vs CSK": {
        "General": 850,
        "Premium": 1600,
        "VIP": 3200
    }

};



function updateSummary() {

    let match = matchSelect.value;

    let stand = standSelect.value;

    let quantity = Number(quantityInput.value);

    let price = 0;

    let total = 0;


    if (match && stand && ticketPrices[match]) {

        price = ticketPrices[match][stand];

        if (Number.isInteger(quantity) &&
            quantity >= 1 && quantity <= 10) {

            total = price * quantity;
        }
    }


    document.getElementById("summaryMatch").innerHTML =
        match || "Not Selected";

    document.getElementById("summaryStand").innerHTML =
        stand || "Not Selected";

    document.getElementById("summaryQuantity").innerHTML =
        quantityInput.value || "0";

    document.getElementById("summaryPrice").innerHTML =
        price;

    document.getElementById("totalPrice").innerHTML =
        total;


    showToast("Booking summary updated successfully!");
}



matchSelect.addEventListener("change", updateSummary);

standSelect.addEventListener("change", updateSummary);

quantityInput.addEventListener("change", updateSummary);


// Activity 8: Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("active");

    let isOpen = navMenu.classList.contains("active");

    menuToggle.innerHTML = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// Activity 8: Filter Matches by Team

const teamFilter = document.getElementById("teamFilter");

const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function() {

    let selectedTeam = teamFilter.value;

    matchCards.forEach(function(card) {

        let teams = card.getAttribute("data-team");

        if (selectedTeam === "all" ||
            teams.split(" ").includes(selectedTeam)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


// Activity 8: Grid View and List View

const matchContainer = document.getElementById("matchContainer");

document.getElementById("gridView").addEventListener("click", function() {

    matchContainer.classList.remove("list-view");
    matchContainer.classList.add("match-grid");

});

document.getElementById("listView").addEventListener("click", function() {

    matchContainer.classList.remove("match-grid");
    matchContainer.classList.add("list-view");

});
