// ==============================
// AOS INITIALIZATION
// ==============================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ==============================
// TYPING EFFECT
// ==============================

const typingElement = document.querySelector(".typing");

const texts = [
    "Web Developer",
    "UI Designer",
    "Frontend Developer",
    "Digital Creator",
    "Freelancer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText =
                    Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

observer.observe(statsSection);

// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        navbar.style.background =
            "rgba(5,8,22,0.8)";

        navbar.style.boxShadow =
            "none";
    }
});

// ==============================
// PAGE LOAD ANIMATION
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);
});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});

// ==============================
// CLOSE MENU AFTER CLICK
// ==============================

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
    });
});

// ==============================
// SMOOTH SCROLL
// ==============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ==============================
// ACTIVE NAV LINK
// ==============================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

// ==============================
// HERO IMAGE FLOATING EFFECT
// ==============================

const heroImage =
    document.querySelector(".hero-image img");

let floatDirection = 1;

setInterval(() => {

    heroImage.style.transform =
        `translateY(${floatDirection * 10}px)`;

    heroImage.style.transition =
        "1.5s ease-in-out";

    floatDirection *= -1;

}, 1500);

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document
.querySelectorAll(
'.btn-primary, .btn-secondary'
)
.forEach(button => {

    button.addEventListener(
    "mouseenter",
    () => {

        button.style.transform =
            "translateY(-5px) scale(1.03)";
    });

    button.addEventListener(
    "mouseleave",
    () => {

        button.style.transform =
            "translateY(0) scale(1)";
    });
});