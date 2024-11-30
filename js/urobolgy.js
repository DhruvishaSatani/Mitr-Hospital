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