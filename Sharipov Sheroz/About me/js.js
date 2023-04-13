var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0"
}

function hideMenu() {
    navLinks.style.right = "-200px"
};


var top_button = document.getElementById("for_btn");

// Tugmacha ko'rinish qismi
window.onscroll = function() { scrollFuntion() }

function scrollFuntion() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        top_button.style.opacity = "1";
        top_button.style.visibility = "";
    } else {
        top_button.style.visibility = "hidden";
    }
}

// Tepa chiqarish qismi
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}