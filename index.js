// Dark/Light Mode
function toggleTheme() {
    document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
}

// Scroll Animation
const sections = document.querySelectorAll("section");

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
     const boxTop = sec.getBoundingClientRect().top;
     if (boxTop < triggerBottom) {
         sec.classList.add("visible");
    }
    });
 }

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
  