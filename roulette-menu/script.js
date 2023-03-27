const menu = document.querySelector(".roulette-box");
const btnMenu = document.querySelector(".toggle-btn");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("active");
}
