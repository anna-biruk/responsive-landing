// Import styles
import '../styles/main.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import modules
import { initThemeSwitcher } from './modules/theme-switcher';
import { initMobileMenu } from './modules/mobile-menu';
import { initSlider } from './modules/slider';
import { initCountriesSlider } from './modules/countries-slider';
import { initAnimations } from './modules/animations';
import { initParallax } from './modules/parallax';
import { initFooter } from './modules/footer';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initMobileMenu();
  initSlider();
  initCountriesSlider();
  initAnimations();
  initParallax();
  initFooter();
});
