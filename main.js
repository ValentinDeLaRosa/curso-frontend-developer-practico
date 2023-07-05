//Select HTML items
const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");



navBarEmail.addEventListener('click', toggleMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}