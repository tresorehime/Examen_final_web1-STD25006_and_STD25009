document.getElementById('burger-btn').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.style.display = 'flex';
  }
});

document.getElementById('close-btn').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.add('hidden');
  menu.style.display = '';
});