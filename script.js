const mobileMenu = document.querySelector("#mobile-menu");
const openMenuBtn = document.querySelector("#openMenu");
const closeMenuBtn = document.querySelector("#closeMenu");

openMenuBtn.onclick = function() {
  mobileMenu.classList.remove("hidden");
}

closeMenuBtn.onclick = function() {
  mobileMenu.classList.add("hidden");
}
