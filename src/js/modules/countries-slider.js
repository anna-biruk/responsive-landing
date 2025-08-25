import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initCountriesSlider() {
  const sliderElement = document.querySelector('.countries-slider');
  if (!sliderElement) return;

  // Get progress bar elements
  const progressFill = document.querySelector('.countries-progress__fill');
  const endNumber = document.querySelector('.countries-progress__end');

  // Update progress bar
  const updateProgress = (swiper) => {
    const currentIndex = swiper.realIndex;
    const totalSlides = swiper.slides.length;
    const slidesPerView =
      swiper.params.slidesPerView === 'auto' ? 1 : swiper.params.slidesPerView;

    // Calculate how many items are currently visible
    const visibleSlides = Math.min(slidesPerView + currentIndex, totalSlides);

    // Calculate progress based on visible items vs total items
    const progressPercent = (visibleSlides / totalSlides) * 100;

    if (progressFill) {
      progressFill.style.width = `${progressPercent}%`;
    }

    if (endNumber) endNumber.textContent = totalSlides.toString();
  };

  const swiper = new Swiper('.countries-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.countries-nav__btn--next',
      prevEl: '.countries-nav__btn--prev, .countries-nav__btn--prev-mobile',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    on: {
      init() {
        updateProgress(this);
      },
      slideChange() {
        updateProgress(this);
      },
    },
  });

  return swiper;
}
