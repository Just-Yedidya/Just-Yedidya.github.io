// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Bouton social animé avec rotation
const toggle = document.getElementById("socialToggle");
const icons = document.getElementById("socialIcons");

toggle.addEventListener("click", () => {
  icons.classList.toggle("hidden");
  toggle.textContent = icons.classList.contains("hidden") ? "+" : "−";
  toggle.classList.toggle("rotate");
});

// Animation d'apparition sur scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
