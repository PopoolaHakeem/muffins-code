const mobileMenu = document.querySelector('#mobile-menu');
const openMenuButton = document.querySelector('#openMenu');
const closeMenuButton = document.querySelector('#closeMenu');

openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  openMenuButton.classList.add('hidden');
});
closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
    openMenuButton.classList.remove('hidden');
});

for (const link of mobileMenu.querySelectorAll('a')) {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    openMenuButton.classList.remove('hidden');
  });
}