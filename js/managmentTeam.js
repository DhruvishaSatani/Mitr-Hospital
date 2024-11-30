// const menuToggle = document.getElementById("menu-toggle");
// const mobileMenu = document.getElementById("mobile-menu");

// menuToggle.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });


// // Select the header
// const header = document.getElementById('main-header');

// // Function to handle the sticky header
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     header.classList.add('shadow-md', 'bg-[#DCEAFF]'); // Add shadow and change background
//   } else {
//     header.classList.remove('shadow-md', 'bg-[#DCEAFF]'); // Reset to default
//   }
// });


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

const doctors = {
          drSingal: {
            name: "Dr. A.K. Singal",
            image: "Img/Rectangle 521.png",
            details: `Dr Arbinder Kumar Singal is a noted Pediatric Urologist and a Healthcare Entrepreneur based in Navi Mumbai, India. Besides winning academic laurels and professional excellence in medical specialties, Dr Singal has worked at various medical institutes in India/ USA and has been a visiting faculty at University of Minnesota, Boston Children’s (Harvard) and Ohio State University in USA. His innovative surgeries and difficult cases have found a frequent mention in newspapers and telemedia. Dr Singal has more than 40 international publications, numerous presentations at American & European meetings and has been felicitated at various academic forums. Beyond involvement in direct patient care & medical education, Dr Singal has been proactive in designing medical equipment, developing treatment algorithms and establishing new methods of health care delivery.
            

            Dr Singal has been instrumental in setting up MediAngels (www.mediangels.com) – an online medical consulting platform, MITR Hospital – a specialty urology and laparoscopy centre at Kharghar (www.mitrhospital.com), Navi Mumbai, Advanced Eye Hospital and Institute – AEHI (www.advancedeyehospital.com) and Hypospadias Foundation – a budding Non-profit organisation dedicated to children with genitor-urinary malformations such as hypospadias and disorders of sex development (www.hypospadiasfoundation.com). At MITR Hospital, as a Director he looks at Finances, Brand building & Marketing, Advertising and Corporate liaisons.
            `,
          },
          drDubey: {
            name: "Dr. Manish Dubey",
            image: "https://via.placeholder.com/600x400",
            details: `Dr. Manish Dubey is a highly skilled Urologist known for his groundbreaking work in minimally invasive 
            surgeries. He has been practicing for over two decades and is committed to patient-centric healthcare.`,
          },
          drMalladi: {
            name: "Dr. Vijaykumar Malladi",
            image: "https://via.placeholder.com/600x400",
            details: `Dr. Vijaykumar Malladi is a renowned Cardiologist with extensive experience in interventional cardiology. 
            His focus is on providing advanced cardiac care with the latest technologies.`,
          },
          
          drNandita: {
            name: "Dr. Nandita Dubey",
            image: "https://via.placeholder.com/600x400",
            details: `Dr. Nandita Dubey specializes in gynecology and women’s health. She is passionate about empowering women 
            through health education and preventive care.`,
          },
          drgharat: {
            name: " Dr. Amit Gharat",
            image: "https://via.placeholder.com/600x400",
            details: ` Dr. Amit Gharat Dubey specializes in gynecology and women’s health. She is passionate about empowering women 
            through health education and preventive care.`,
          },
          drkumar: {
            name: "Dr. Bharat Kumar",
            image: "https://via.placeholder.com/600x400",
            details: `Dr. Bharat Kumar specializes in gynecology and women’s health. She is passionate about empowering women 
            through health education and preventive care.`,
          },
          drbavisker: {
            name: "Dr.Ajit Baviskar ",
            image: "https://via.placeholder.com/600x400",
            details: `Dr.Ajit Baviskar Administrator specializes in gynecology and women’s health. She is passionate about empowering women 
            through health education and preventive care.`,
          },
          drgedam: {
            name: " Mr. Suraj Gedam ",
            image: "https://via.placeholder.com/600x400",
            details: `Mr. Suraj Gedam specializes in gynecology and women’s health. She is passionate about empowering women 
            through health education and preventive care.`,
          },
        };
    
        // Function to show doctor details
        function showDetails(doctorId) {
          const doctor = doctors[doctorId];
          const doctorDetails = document.getElementById("doctorDetails");
    
          doctorDetails.innerHTML = `
            <h2 class="text-xl font-bold mb-4  text-[#1B528F]">${doctor.name}</h2>
            <img src="${doctor.image}" alt="${doctor.name}" class=" rounded-lg mb-4  bg-top">
            <p class="text-[#7F7F7F]">${doctor.details}</p>
          `;
        }