const backToTopBtn = document.querySelector('.footer__back-to-top');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
