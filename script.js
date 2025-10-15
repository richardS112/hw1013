// script.js - navigation toggle, year injection, simple form handling

document.addEventListener('DOMContentLoaded', function () {
  // fill years in all pages
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(el => el.textContent = new Date().getFullYear());

  // nav toggle for mobile
  const navs = document.querySelectorAll('.nav');
  const toggles = document.querySelectorAll('.nav-toggle');

  toggles.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nav = navs[idx] || document.querySelector('.nav');
      if (!nav) return;
      nav.classList.toggle('show');
      btn.classList.toggle('open');
    });
  });

  // close mobile nav when link clicked
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelectorAll('.nav').forEach(n => n.classList.remove('show'));
    });
  });

});

// simple form handler (doesn't send email — uses mailto fallback)
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    status.textContent = 'Please fill out all fields.';
    return false;
  }

  // Build a mailto link as a simple fallback for sending messages.
  const subject = encodeURIComponent(`Contact from website: ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailto = `mailto:Richard.Shelar62@gmail.com?subject=${subject}&body=${body}`;

  // Try to open user's mail client
  window.location.href = mailto;
  status.textContent = 'Opening your email client...';
  return false;
}
