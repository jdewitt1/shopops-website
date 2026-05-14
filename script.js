const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;

  const linkPath = new URL(href, window.location.origin).pathname;
  if (linkPath === "/" ? currentPath === "/" : currentPath.startsWith(linkPath)) {
    link.classList.add("active");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
