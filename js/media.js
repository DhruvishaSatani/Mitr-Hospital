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

