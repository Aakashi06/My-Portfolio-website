// ======================
// Dark / Light Theme Toggle (with safety checks)
// ======================
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle"); // the wrapper with icons
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// init theme
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  body.classList.toggle("dark", isDark);
  if (lightIcon && darkIcon) {
    lightIcon.style.display = isDark ? "block" : "none";
    darkIcon.style.display = isDark ? "none" : "block";
  }
})();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (lightIcon && darkIcon) {
      lightIcon.style.display = isDark ? "block" : "none";
      darkIcon.style.display = isDark ? "none" : "block";
    }
  });
}

// ======================
// Smooth Scrolling — ONLY for in-page hash links
// (Don't block normal page navigation like blogs.html)
// ======================
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 70; // navbar height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

// ======================
// Animate Cards on Scroll
// ======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".project-card").forEach(card => observer.observe(card));
