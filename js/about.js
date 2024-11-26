


const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
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
