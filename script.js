// mobile menu toggle
const openMenuButton = document.querySelector('#openMenu');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenuButton = document.querySelector('#closeMenu');

openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  openMenuButton.classList.add('hidden');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  openMenuButton.classList.remove('hidden');
});



// close mobile menu when a link is clicked
for (const link of mobileMenu.querySelectorAll('a')) {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    openMenuButton.classList.remove('hidden');
  });
}














