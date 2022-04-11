let menu = document.getElementById('hamburger-menu');
let nav = document.getElementById('header__navigation__items');

menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger-menu_rotate');

    if (nav.className == '') {
        nav.classList.add('header__navigation__items_open');
        nav.style.opacity = '1';
    } else if (nav.className == 'header__navigation__items_open') {
        nav.classList.add('header__navigation__items_close');
        nav.classList.remove('header__navigation__items_open');
        nav.style.opacity = '0';
    } else if (nav.className == 'header__navigation__items_close') {
        nav.classList.add('header__navigation__items_open');
        nav.classList.remove('header__navigation__items_close');
        nav.style.opacity = '1';
    } else if (nav.className == 'header__navigation__items_close') {
        nav.classList.add('header__navigation__items_open');
        nav.style.opacity = '1';
    }
})