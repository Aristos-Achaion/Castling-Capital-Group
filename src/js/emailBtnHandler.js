document.getElementById("email-btn").addEventListener("click", function () {
  const recipient = "goran@forwardslashny.com";
  const subject = "Schedule a consultation";

  // Construct the mailto URL
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}`;

  // Open the mailto link
  window.location.href = mailtoLink;
});
