const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

function openMenu() {
  nav.classList.add('nav--open');
  burger.classList.add('burger--open');
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', 'Close menu');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  nav.classList.remove('nav--open');
  burger.classList.remove('burger--open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('no-scroll');
}

burger.addEventListener('click', () => {
  nav.classList.contains('nav--open') ? closeMenu() : openMenu();
});

// close after clicking a link
nav.addEventListener('click', (e) => {
  if (e.target.closest('.nav__link')) closeMenu();
});

// close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// close when resizing to desktop
window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
  if (e.matches) closeMenu();
});