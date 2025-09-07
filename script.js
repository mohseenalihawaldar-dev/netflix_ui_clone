// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".sticky-nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll reveal effect
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// FAQ toggle
document.querySelectorAll(".faqbox").forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("open");
  });
});
