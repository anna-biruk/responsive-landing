import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export function initSlider() {
  const sliderElement = document.querySelector('.slider');
  if (!sliderElement) return;

  const swiper = new Swiper('.slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  return swiper;
}
