import {
  handleBurgerClick,
  scrollSection,
  closeOpenNavAuto,
  handleMenuItemClick,
} from './handlers.js';

const menuLinks = document.querySelectorAll('[data-btn="menuLink"]');
const heroButton = document.querySelector('.hero__button');

menuLinks.forEach((item) => item.addEventListener('click', scrollSection));
heroButton.addEventListener('click', scrollSection);


handleBurgerClick();
handleMenuItemClick();
closeOpenNavAuto();