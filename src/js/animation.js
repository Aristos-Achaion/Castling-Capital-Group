document.addEventListener("DOMContentLoaded", () => {
  const animContainer = document.getElementById("anim-container");
  var animItem = bodymovin.loadAnimation({
    wrapper: animContainer,
    animType: "svg",
    loop: false,
    path: "./src/js/animation.json",
  });

  // Intersection Observer to trigger animation when her section is in view
  const heroSection = document.querySelector(".hero");

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Trigger when 10% of the hero section is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Play the Bodymovin animation
        animItem.goToAndPlay(0, true); // Restart the animation from the beginning
      }
    });
  }, observerOptions);

  // Start observing the hero section
  observer.observe(heroSection);
});
