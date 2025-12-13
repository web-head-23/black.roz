// Smooth scroll feel
document.addEventListener("wheel", (e) => {
  e.preventDefault();
  window.scrollBy({
    top: e.deltaY,
    left: 0,
    behavior: "smooth"
  });
}, { passive: false });
