/* Shared navigation for GitHub Pages. Each page is usable without JavaScript. */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

function closeNavigation() {
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}

toggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open') || false;
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNavigation();
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
