const mobileMenu = document.querySelector("#mobile-menu");
const openMenuButtons = document.querySelectorAll("[command='show-modal']");
const closeMenuButtons = document.querySelectorAll("[command='hide-modal']");

openMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });
});

closeMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});