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


function switchTab(event, tabId) {
          // Hide all content sections
          const tabsContent = document.querySelectorAll('[id^="robotic-surgery"], [id^="andrology"], [id^="urology"]');
          tabsContent.forEach((tab) => tab.classList.add('hidden'));
    
          // Remove active classes from all buttons
          const allTabs = document.querySelectorAll('#tabs button');
          allTabs.forEach((btn) => {
            btn.classList.remove('text-blue-500', 'border-blue-500');
            btn.classList.add('border-gray-300', 'hover:border-blue-500', 'hover:text-blue-500');
          });
    
          // Show the active tab content
          document.getElementById(tabId).classList.remove('hidden');
    
          // Highlight the active tab button
          event.currentTarget.classList.add('text-blue-500', 'border-blue-500');
          event.currentTarget.classList.remove('border-gray-300');
        }


        const specialistData = {
          urology: {
            image: "https://via.placeholder.com/800x400?text=Urology",
            description:
              "Urology focuses on diseases of the urinary tract and the male reproductive organs. It includes treatment for kidney stones, bladder issues, and male infertility.",
          },
          "robotic-surgery": {
            image: "https://via.placeholder.com/800x400?text=Robotic+Surgery",
            description:
              "Robotic surgery offers precision and minimally invasive solutions for complex procedures, enabling faster recovery and reduced complications.",
          },
          pediatrics: {
            image: "https://via.placeholder.com/800x400?text=Pediatrics",
            description:
              "Pediatrics specializes in medical care for infants, children, and adolescents, focusing on their physical, mental, and emotional well-being.",
          },
          gastroenterology: {
            image: "https://via.placeholder.com/800x400?text=Gastroenterology",
            description:
              "Gastroenterology is the study of the digestive system and its disorders, including conditions like acid reflux, IBS, and liver diseases.",
          },
          neurology: {
            image: "https://via.placeholder.com/800x400?text=Neurology",
            description:
              "Neurology deals with disorders of the nervous system, including the brain, spinal cord, and nerves. Common conditions include migraines, strokes, and epilepsy.",
          },
        };
    
        function loadSpecialist(specialist) {
          const content = specialistData[specialist];
          if (content) {
            document.getElementById("specialist-image").src = content.image;
            document.getElementById("specialist-description").textContent = content.description;
          }
        }
        // FAQ Section


         // JavaScript to toggle FAQ answers
  function toggleFAQ(index) {
    const answer = document.getElementById('answer-${index}');
    const icon = document.getElementById('icon-${index}');
    answer.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  }



  
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



// --------------------------------------doctor carousel --------------------------------------

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0; // Tracks the scroll position

// Adjust the scroll amount based on the card width
const cardWidth = carousel.firstElementChild.offsetWidth + 28; // Add space-x-7 value (28px)

// Scroll to the previous card
prevBtn.addEventListener("click", () => {
  scrollAmount -= cardWidth;
  carousel.style.transform = `translateX(${-scrollAmount}px)`;
});

// Scroll to the next card
nextBtn.addEventListener("click", () => {
  scrollAmount += cardWidth;
  carousel.style.transform = `translateX(${-scrollAmount}px)`;
});

// Prevent overscrolling at edges
carousel.addEventListener("transitionend", () => {
  const totalScroll = carousel.scrollWidth - carousel.offsetWidth;
  if (scrollAmount < 0) scrollAmount = 0;
  if (scrollAmount > totalScroll) scrollAmount = totalScroll;
});
