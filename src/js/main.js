const hamburger = document.querySelector(".header__icon");
const menu = document.querySelector(".menu");
const close_icon = document.querySelector(".menu__icon");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});
close_icon.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});
