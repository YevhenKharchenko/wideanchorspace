import Swiper from 'swiper';
import 'swiper/css/bundle';

const gameplayLeftArrow = document.getElementById('gameplayLeftArrow');
const gameplayRightArrow = document.getElementById('gameplayRightArrow');
const gameplayDots = document.querySelectorAll('.gameplay-dot');

let gameplaySwiper;

gameplaySwiper = new Swiper('.gameplay-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 24,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 5,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.gameplay-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateGameplayArrows(this);
      updateGameplayDots(this.realIndex);
    },
  },
});

function updateGameplayArrows(swiper) {
  gameplayLeftArrow.disabled = swiper.isBeginning;
  gameplayRightArrow.disabled = swiper.isEnd;
}

gameplayLeftArrow.addEventListener('click', () => {
  gameplaySwiper.slidePrev();
});

gameplayRightArrow.addEventListener('click', () => {
  gameplaySwiper.slideNext();
});

function updateGameplayDots(index) {
  gameplayDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

gameplayDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gameplaySwiper.slideTo(index);
  });
});
