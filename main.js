const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const yearNode = document.querySelector('#year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    siteNav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});
