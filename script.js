const MENU_ICON = document.querySelector("#menu-bar");
const NAV_LINKS = document.querySelector(".navbar-links");

MENU_ICON.onclick = () => {
    NAV_LINKS.classList.toggle('active');
} 