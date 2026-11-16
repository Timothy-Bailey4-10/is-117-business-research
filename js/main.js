// main.js — the only JavaScript on the site.
// It powers the "Menu" button on small screens. Without JavaScript the
// menu simply stays open, so the site still works.

// Tell the CSS that JavaScript is running (lets it hide the menu on phones).
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close menu' : 'Menu';
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  // Escape key closes the menu and returns focus to the button.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      button.focus();
    }
  });
});
