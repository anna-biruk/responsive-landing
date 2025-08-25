import gsap from 'gsap';

export function initMobileMenu() {
  const burgerMenus = document.querySelectorAll('.burger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeButton = document.querySelector('.mobile-nav__close');

  if (!burgerMenus.length || !mobileNav || !overlay) return;

  let isOpen = false;

  // Burger menu click handler for both buttons
  burgerMenus.forEach((burger) => {
    burger.addEventListener('click', toggleMenu);
  });

  // Close button click handler
  if (closeButton) {
    closeButton.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking on links
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isOpen) {
        toggleMenu();
      }
    });
  });

  // Close menu when clicking overlay
  overlay.addEventListener('click', () => {
    if (isOpen) {
      toggleMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleMenu();
    }
  });

  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1024 && isOpen) {
        toggleMenu();
      }
    }, 250);
  });

  function toggleMenu() {
    isOpen = !isOpen;

    // Update aria-expanded on both burger buttons
    burgerMenus.forEach((burger) => {
      burger.setAttribute('aria-expanded', isOpen);
    });

    // Animate menu (always from right)
    gsap.to(mobileNav, {
      x: isOpen ? 0 : '100%',
      duration: 0.3,
      ease: 'power2.inOut',
    });

    // Handle overlay
    if (isOpen) {
      overlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    } else {
      overlay.classList.remove('is-visible');
      document.body.style.overflow = '';
    }

    // Toggle menu class
    mobileNav.classList.toggle('is-open', isOpen);
  }
}
