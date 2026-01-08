// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.style.boxShadow = window.scrollY > 20
        ? "0 6px 20px rgba(0,0,0,0.08)"
        : "0 4px 12px rgba(0,0,0,0.05)";
});
const texts = ["Web Developer", "Frontend Developer", "UI Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1500);
    }
    setTimeout(type, 120);
})();
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function animateSkills() {
    const skills = document.querySelectorAll(".progress-bar");

    skills.forEach(skill => {
        const skillValue = skill.getAttribute("data-skill");
        skill.style.width = skillValue;
    });
}

window.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".skills");
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        animateSkills();
    }
});
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent 🚀");
    this.reset();
});