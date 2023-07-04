const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");


navBarEmail.addEventListener('click', toggleMenu)

function toggleMenu(){
    desktopMenu.classList.toggle('inactive')
}