document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const envelope = document.getElementById("envelope");
  const messageContainer = document.getElementById("messageContainer");

  openBtn.addEventListener("click", () => {
    const flap = envelope.querySelector(".flap");
    flap.style.transform = "rotateX(-180deg)";
    setTimeout(() => {
      messageContainer.classList.add("visible");
    }, 800);
  });

  closeBtn.addEventListener("click", () => {
    messageContainer.classList.remove("visible");
    setTimeout(() => {
      const flap = envelope.querySelector(".flap");
      flap.style.transform = "rotateX(0deg)";
    }, 500);
  });

  // Floating icons animation
  const floatingIconsContainer = document.querySelector(".floating-icons");
  const iconTypes = ["heart", "kiss", "star"];
  for (let i = 0; i < 25; i++) {
    const icon = document.createElement("div");
    icon.classList.add("icon", iconTypes[Math.floor(Math.random() * iconTypes.length)]);
    icon.style.setProperty("--random-x", Math.random());
    icon.style.setProperty("--random-y", Math.random());
    icon.style.setProperty("--random-delay", Math.random());
    floatingIconsContainer.appendChild(icon);
  }
});
