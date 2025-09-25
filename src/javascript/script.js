$(document).ready(function () {
  $("#mobile-btn").on("click", function () {
    $("#mobile-menu").toggleClass("active");
  });
});

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 breakpoints:{
  0: {
    slidesPerView: 1,
    centeredSlides: true,
  },
  768: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  1080: {
    slidesPerView: 3,
    centeredSlides: false,
  },
 },
});
