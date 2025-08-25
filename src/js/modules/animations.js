import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Match media for responsive animations
  const mm = gsap.matchMedia();

  // Desktop animations
  mm.add('(min-width: 1024px)', () => {
    animateHero();
    animateProductCards();
    setupScrollAnimations();
  });

  // Tablet animations
  mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
    animateHero();
    animateProductCards(true); // Reduced animations
  });

  // Mobile animations
  mm.add('(max-width: 767px)', () => {
    // Hero text animations removed - text appears immediately

    gsap.from('.product-card', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.product-grid',
        start: 'top 80%',
        once: true,
      },
    });
  });
}

function animateHero() {
  // Hero text animations removed - text appears immediately

  // Decorative elements animation (keeping decorative animations)
  gsap.from('.hero__decoration', {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    delay: 0.5,
  });
}

function animateProductCards(reduced = false) {
  gsap.from('.product-card', {
    scrollTrigger: {
      trigger: '.product-grid',
      start: 'top 80%',
      once: true,
    },
    opacity: 0,
    y: reduced ? 20 : 30,
    duration: reduced ? 0.5 : 0.6,
    stagger: reduced ? 0.08 : 0.1,
    ease: 'power2.out',
  });
}

function setupScrollAnimations() {
  // Fade in sections on scroll
  const sections = document.querySelectorAll('section:not(.hero)');

  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        once: true,
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  // Breadcrumbs animation
  gsap.from('.breadcrumbs__item', {
    scrollTrigger: {
      trigger: '.breadcrumbs',
      start: 'top 90%',
      once: true,
    },
    opacity: 0,
    x: -20,
    duration: 0.4,
    stagger: 0.1,
    ease: 'power2.out',
  });
}
