const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const messageContainer = document.getElementById("messageContainer");
const closeBtn = document.getElementById("closeBtn");

// Open Envelope Animation
openBtn.addEventListener("click", () => {
  envelope.style.display = "none";
  messageContainer.classList.add("visible");
});

// Close Message
closeBtn.addEventListener("click", () => {
  messageContainer.classList.remove("visible");
  envelope.style.display = "block";
});
