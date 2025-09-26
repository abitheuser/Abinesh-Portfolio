// Mobile menu toggle (works on all pages)
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear().toString();

// Contact form mailto (only on contact page)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  statusEl && (statusEl.textContent = 'Opening your email client...');
});
