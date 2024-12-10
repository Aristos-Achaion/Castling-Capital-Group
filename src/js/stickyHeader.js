document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerLogo = document.querySelector(".header__logo");
  const links = document.querySelectorAll(".header__nav ul li");

  header.classList.add("loaded");
  window.addEventListener("scroll", function () {
    header.classList.toggle("header--sticky", window.scrollY > 0);
    header.classList.remove("loaded");
    headerLogo.style.transform = "scale(1)";
    headerLogo.style.transition = "all 0.35s ease";
    links.forEach((link) => {
      link.style.animation = "none";
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    });
  });
});
