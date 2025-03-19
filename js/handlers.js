export const handleBurgerClick = () => {
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.header__menu');

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    nav.classList.toggle('active');
  });
};
