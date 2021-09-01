const cross = document.querySelector(".cross");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

cross.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    cross.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    cross.classList.remove("active");
    navMenu.classList.remove("active");
}