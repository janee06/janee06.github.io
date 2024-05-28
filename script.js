const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const links = document.querySelector(".links");

function toggleMenu() {
    menu.classList.toggle("showMenu");
    closeIcon.classList.toggle("is-active");
    menuIcon.classList.toggle("is-active");
    links.classList.toggle("showLinks");
}

hamburger.addEventListener("click", toggleMenu);
