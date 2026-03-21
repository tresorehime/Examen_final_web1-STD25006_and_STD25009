document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('mobileMenu');
  const openBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('close-btn');

  if (openBtn && menu) {
    openBtn.addEventListener('click', () => {
      menu.classList.remove('hidden');
      openBtn.classList.add('hidden');
      closeBtn.classList.remove('hidden');
});
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.style.display = '';
      closeBtn.classList.add('hidden');
      openBtn.classList.remove('hidden');
});
  }
});