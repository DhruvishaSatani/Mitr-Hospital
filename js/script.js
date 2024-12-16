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


// <!-- Testimonials -->

const slider = document.getElementById("slider");
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
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
});




// <!-- Articles Blog   -->


const sliders = document.getElementById('blog-slider');
const prevButtons = document.getElementById('prev-btn');
const nextButtons = document.getElementById('next-btn');

let currentIndexs = 0;

// Calculate total slides
const totalSlide = sliders.children.length;
const slideWidth = sliders.children[0].offsetWidth;

// Adjust slider position
function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndexs * slideWidth}px)`;
}

// Next Button
nextButton.addEventListener('click', () => {
  currentIndexs = (currentIndexs + 1) % totalSlide; // Loop back to the start
  updateSliderPosition();
});

// Previous Button
prevButton.addEventListener('click', () => {
  currentIndexs = (currentIndexs - 1 + totalSlide) % totalSlide; // Loop to the end
  updateSliderPosition();
});

// Responsive Adjustments
window.addEventListener('resize', () => {
  updateSliderPosition();
});




const scrollTop = document.getElementById('scrollTop');
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 200px from the top
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

// Scroll to the top smoothly when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



