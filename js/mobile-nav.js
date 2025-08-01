document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('nav ul a');
  const mobileNav = document.getElementById('nav-links');

  mobileMenu.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileNav.classList.toggle('active');
  });

  navLinks.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
    mobileNav.classList.remove('active');
  });
});
