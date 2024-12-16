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


//  ************************* <!-- Inside MITR  -->  ***********************

const carousel = document.getElementById("carousel");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Function to update the carousel and active dot
function updateCarousel(index) {
  const width = carousel.offsetWidth;
  carousel.style.transform = `translateX(-${index * width}px)`;
  dots.forEach((dot, i) => {
    dot.classList.remove("bg-blue-500");
    dot.classList.add("bg-gray-400");
    if (i === index) {
      dot.classList.remove("bg-gray-400");
      dot.classList.add("bg-blue-500");
    }
  });
}

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});



// Auto-update on resize
window.addEventListener("resize", () => updateCarousel(currentIndex));


// Robotic Surgery
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate-fade").forEach((el) => {
    observer.observe(el);
  });
});



