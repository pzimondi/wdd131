// temples.js

document.addEventListener("DOMContentLoaded", () => {
  // dynamic year
  document.getElementById("year").textContent = new Date().getFullYear();

  // last modified
  document.getElementById("lastModified").textContent = document.lastModified;

  // menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  menuBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex" || navLinks.style.display === "block") {
      navLinks.style.display = "none";
      menuBtn.textContent = "☰";
    } else {
      navLinks.style.display = "block";
      menuBtn.textContent = "✖";
    }
  });

  // reset nav when resizing
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
      menuBtn.textContent = "☰";
    }
  });
});
