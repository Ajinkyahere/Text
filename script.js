document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".open-button");
  const closeButton = document.querySelector(".close-button");
  const messageContainer = document.querySelector(".message-container");
  const envelopeFlap = document.querySelector(".flap");

  // Open envelope and show message
  openButton.addEventListener("click", () => {
    envelopeFlap.style.transform = "rotateX(-180deg)";
    setTimeout(() => {
      messageContainer.classList.add("visible");
    }, 500); // Show message after flap animation
  });

  // Close message
  closeButton.addEventListener("click", () => {
    messageContainer.classList.remove("visible");
    envelopeFlap.style.transform = "rotateX(0deg)";
  });
});
