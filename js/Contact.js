// function validateForm() {
//           const emailField = document.getElementById("email");
//           const emailError = document.getElementById("emailError");
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//           if (!emailRegex.test(emailField.value)) {
//             emailError.classList.remove("hidden");
//             emailField.classList.add("border-red-500");
//           } else {
//             emailError.classList.add("hidden");
//             emailField.classList.remove("border-red-500");
//             alert("Form submitted successfully!");
//           }
//         }



const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


// // Toggle the mobile menu
// const menuToggle = document.getElementById("menu-toggle");
// const mobileMenu = document.getElementById("mobile-menu");

// menuToggle.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });



// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    department: document.getElementById("department").value,
    message: document.getElementById("message").value,
  };

  // Send email via EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData) // Replace with your Service ID and Template ID
    .then(
      function (response) {
        alert("Message sent successfully!");
        window.location.reload(); // Refresh the page after submission
      },
      function (error) {
        alert("Failed to send message. Please try again later.");
      }
    );
});