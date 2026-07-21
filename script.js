const reveals = document.querySelectorAll(".reveal");
const navbar = document.querySelector(".navbar");

function revealSections() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("active");
        }
    });
}

function updateNavbar() {
    if (!navbar) return;

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", revealSections);


revealSections();

// Mobile Navigation

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

        });

    });

});