const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  menu.classList.toggle("showMenu");
  closeIcon.classList.toggle("is-active");
  menuIcon.classList.toggle("is-active");
}

hamburger.addEventListener("click", toggleMenu);

$(document).ready(function() {
  $("#carousel-container .owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  });
});