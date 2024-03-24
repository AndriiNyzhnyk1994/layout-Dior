const swiper = new Swiper('.swiper', {
    effect: "fade",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
  });