function applyTiltEffect() {
  const cards = document.querySelectorAll(".tilt-card");
  let animationFrameId; // To manage requestAnimationFrame

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Use requestAnimationFrame for smooth updates
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        card.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
      });
    });

    // Smooth transition on mouseleave
    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.5s ease"; // Add smooth easing
      card.style.transform = "rotateX(0) rotateY(0)";

      // Remove transition after it's done to avoid interference
      setTimeout(() => {
        card.style.transition = "";
      }, 500);
    });
  });
}

export default applyTiltEffect;
