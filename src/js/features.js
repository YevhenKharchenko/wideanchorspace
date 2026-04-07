import Swiper from 'swiper';
import 'swiper/css/bundle';

const featuresLeftArrow = document.getElementById('featuresLeftArrow');
const featuresRightArrow = document.getElementById('featuresRightArrow');
const featuresDots = document.querySelectorAll('.features-dot');

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
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
        .querySelector('.features-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateFeaturesArrows(this);
      updateFeaturesDots(this.realIndex);
    },
  },
});

function updateFeaturesArrows(swiper) {
  featuresLeftArrow.disabled = swiper.isBeginning;
  featuresRightArrow.disabled = swiper.isEnd;
}

featuresLeftArrow.addEventListener('click', () => {
  featuresSwiper.slidePrev();
});

featuresRightArrow.addEventListener('click', () => {
  featuresSwiper.slideNext();
});

function updateFeaturesDots(index) {
  featuresDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

featuresDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    featuresSwiper.slideTo(index);
  });
});
