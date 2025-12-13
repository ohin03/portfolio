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


// Offcanvas menu link scroll fix
document.querySelectorAll('.offcanvas a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    const offcanvasEl = document.getElementById('mobileMenu');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);

    if (offcanvas) {
      offcanvas.hide();
    }

    setTimeout(() => {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }, 300); // offcanvas close animation time
  });
});
