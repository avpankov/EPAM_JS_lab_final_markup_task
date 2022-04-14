import './sass/main.scss';

let menu = document.getElementById('hamburger-menu');
let nav = document.getElementById('header__navigation');

menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger-menu_rotate');

    if (nav.className == '') {
        nav.classList.add('header__navigation_open');
        nav.style.opacity = '1';
    } else if (nav.className == 'header__navigation_open') {
        nav.classList.add('header__navigation_close');
        nav.classList.remove('header__navigation_open');
        nav.style.opacity = '0';
    } else if (nav.className == 'header__navigation_close') {
        nav.classList.add('header__navigation_open');
        nav.classList.remove('header__navigation_close');
        nav.style.opacity = '1';
    } else if (nav.className == 'header__navigation_close') {
        nav.classList.add('header__navigation_open');
        nav.style.opacity = '1';
    }
})