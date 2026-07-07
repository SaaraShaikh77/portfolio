// ================================
// Typing Animation
// ================================

const textArray = [
    "Java Developer",
    "C++ Programmer",
    "SQL Enthusiast",
    "Full Stack Learner",
    "Computer Science Student"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const current = textArray[textIndex];

    if (!isDeleting) {
        typingElement.textContent = current.substring(0, charIndex++);
    } else {
        typingElement.textContent = current.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================================
// Mobile Menu
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================================
// Close Menu After Clicking Link
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ================================
// Scroll Reveal Animation
// ================================

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(el => observer.observe(el));


// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// Active Navigation Highlight
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});