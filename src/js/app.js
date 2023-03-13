import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-burger');
// burger ///

function showBurgerMenu({target}) {
    if (target.closest('.burger')) {

        burger.classList.toggle('_active');
        menu.classList.toggle('_active-menu');

        document.body.classList.toggle('_hidden');
    }
}

burger.addEventListener('click', showBurgerMenu);

// footer-active-menu //

const footerLabels = document.querySelectorAll('.footer__label');
const footersMenu = document.querySelectorAll('.menu-footer');

for (let i = 0; i < footerLabels.length; i++) {
    const activeList = () => {
    footersMenu[i].classList.toggle('_list');
}

    footerLabels[i].addEventListener('click', activeList);
}