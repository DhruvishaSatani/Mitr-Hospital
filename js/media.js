const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
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

