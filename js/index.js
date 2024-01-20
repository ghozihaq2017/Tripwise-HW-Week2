// Konfigurasi Owl Carousel
$('.owl-carousel').owlCarousel({
  center: true,
  stagePadding: 50,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

// SETTING WARNA BACKGROUND NAVBAR SAAT SCROLL
const navbar = document.getElementById('nav');
var screenWidth = window.innerWidth || document.documentElement.clientWidth;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    if (screenWidth <= 768) {
      navbar.style.backgroundColor = '#c0a080';
    } else if (screenWidth > 720 && screenWidth <= 1024) {
      navbar.style.backgroundColor = '#121212';
    } else {
      navbar.style.backgroundColor = '#00253f';
    }
  } else {
    navbar.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

// MEMBUAT HAMBURGER BUTTON DAN NAVBAR SAAT RESPONSIVE
window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });
};
