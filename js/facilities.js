document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Sticky Header on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});



// te<!-- Testimonials  carousel-->


const slider = document.getElementById("carousel");
let currentIndex = 0;

// Get the total number of slides
const totalSlides = slider.children.length;

// Buttons
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Navigate to a specific slide
function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Previous Button Handler
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(currentIndex);
});

// Next Button Handler
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) ;
  goToSlide(currentIndex);
});


