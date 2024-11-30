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




document.getElementById("prev").addEventListener("click", () => {
  // Logic for previous testimonial
});

document.getElementById("next").addEventListener("click", () => {
  // Logic for next testimonial
});




function filterCategories() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const categoryList = document.getElementById('categoryList');
  const categories = categoryList.getElementsByTagName('li');

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i].textContent.toLowerCase();
    if (category.includes(searchInput)) {
      categories[i].style.display = '';
    } else {
      categories[i].style.display = 'none';
    }
  }
}