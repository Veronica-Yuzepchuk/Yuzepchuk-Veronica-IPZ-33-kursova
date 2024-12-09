document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-first', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      effect: 'fade',
    });
  
    const theStoryBtn = document.querySelector('.first__arrow-down');
    const targetSection = document.querySelector('.second');
  
    if (theStoryBtn && targetSection) {
      theStoryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });