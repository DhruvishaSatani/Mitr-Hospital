   // Toggle Mobile Menu
  //  $('#menu-btn').click(function () {
  //         $('#mobile-menu').toggle();
  //       });



  // const menuBtn = document.getElementById('menu-btn');
  // const mobileMenu = document.getElementById('mobile-menu');

  // menuBtn.addEventListener('click', () => {
  //   mobileMenu.classList.toggle('hidden');
  // });


  // const menuButton = document.getElementById('menu-button');
  //   const menu = document.getElementById('menu');
  //   const mobileMenu = document.getElementById('mobile-menu');

  //   menuButton.addEventListener('click', () => {
  //     menu.classList.toggle('hidden');
  //     mobileMenu.classList.toggle('hidden');
  //   });

    const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });