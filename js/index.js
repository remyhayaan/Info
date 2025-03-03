
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const hamburger = document.querySelector(".hamburger");

    sideMenu.classList.toggle("active");

    // Move hamburger menu when sidebar is open
    if (sideMenu.classList.contains("active")) {
        hamburger.style.position = "fixed";
        hamburger.style.right = "320px"; // Ensure it remains visible
    } else {
        hamburger.style.position = "relative";
        hamburger.style.right = "0";
    }
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('active');
}
