import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initParallax() {
  gsap.registerPlugin(ScrollTrigger);

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    return; // Exit early if user prefers reduced motion
  }

  // Check if device is mobile (disable parallax on mobile for performance)
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return; // Exit early on mobile devices
  }

  // Hero decorative elements parallax only
  gsap.utils.toArray('.hero__decorative-element').forEach((el) => {
    const speed = parseFloat(el.dataset.speed) || 0.5;

    gsap.to(el, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1, // Smooth scrubbing with 1 second lag
        invalidateOnRefresh: true, // Recalculate on window resize
      },
    });
  });
}

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
