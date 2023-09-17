import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-burger');

function showBurgerMenu({ target }) {
  if (target.closest('.burger')) {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active-menu');

    document.body.classList.toggle('_hidden');
  }
}

burger.addEventListener('click', showBurgerMenu);

const footerLabels = document.querySelectorAll('.footer__label');
const footersMenu = document.querySelectorAll('.menu-footer');

for (let i = 0; i < footerLabels.length; i++) {
  const activeList = () => {
    footersMenu[i].classList.toggle('_list');
  };

  footerLabels[i].addEventListener('click', activeList);
}
