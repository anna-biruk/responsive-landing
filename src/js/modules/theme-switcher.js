import { getStorageItem, setStorageItem } from '../utils/storage';
import gsap from 'gsap';

const THEME_KEY = 'theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

export function initThemeSwitcher() {
  const themeToggles = document.querySelectorAll('.theme-toggle');
  if (!themeToggles.length) return;

  // Load saved theme or default to light
  const savedTheme = getStorageItem(THEME_KEY) || LIGHT_THEME;
  setTheme(savedTheme, false);

  // Add click event listener to all theme toggles
  themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
      setTheme(newTheme, true);
    });
  });
}

function setTheme(theme, animate = false) {
  // Update HTML attribute
  document.documentElement.setAttribute('data-theme', theme);

  // Save to localStorage
  setStorageItem(THEME_KEY, theme);

  // Animate theme change if requested
  if (animate) {
    gsap.to('body', {
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        // Any additional animations after theme change
      },
    });
  }
}
