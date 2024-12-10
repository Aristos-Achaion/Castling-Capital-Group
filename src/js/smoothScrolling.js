document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to the target element
        window.scrollTo({
          top: targetElement.offsetTop - 56,
          behavior: "smooth",
        });
      }
    });
  }
});
