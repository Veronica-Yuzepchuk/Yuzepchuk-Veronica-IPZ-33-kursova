var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 73,
        depth: 120,
        modifier: 4,
        slideShadow: false
    },
    loop: false,
    navigation: {
        nextEl: ".swiper__button-nextt",
        prevEl: ".swiper__button-prevv",
        disabledClass: 'swiper__button-disabled'
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        enabled: false
    },
    slidesPerView: 1,
    breakpoints: {
        560: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.5
        },
        1024: {
            slidesPerView: 3
        }
    },
    on: {
        slideChange: function() {
            var swiper = this;
            if (swiper.isBeginning) {
                swiper.navigation.prevEl.classList.add('swiper__button-disabled');
            } else {
                swiper.navigation.prevEl.classList.remove('swiper__button-disabled');
            }
            if (swiper.isEnd) {
                swiper.navigation.nextEl.classList.add('swiper__button-disabled');
            } else {
                swiper.navigation.nextEl.classList.remove('swiper__button-disabled');
            }
        }
    }
});