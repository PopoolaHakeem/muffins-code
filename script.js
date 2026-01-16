// mobile menu toggle
const openMenuButton = document.querySelector('#openMenu');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenuButton = document.querySelector('#closeMenu');

openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  openMenuButton.classList.add('hidden');
});

closeMenuButton.addEventListener('click', () => {
  openMenuButton.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
});

// test button





// openMenuButton.addEventListener('click', () => {
//   alert('Hello world!');
// });










// close mobile menu when a link is clicked
// for (const link of mobileMenu.querySelectorAll('a')) {
//   link.addEventListener('click', () => {
//     mobileMenu.classList.remove('active');
//     openMenuButton.classList.remove('hidden');
//   });
// }

