export const handleBurgerClick = () => {
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.header__menu');

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    nav.classList.toggle('active');
  });
};

export const handleMenuItemClick = () => {
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.header__menu');
  const menuItems = document.querySelectorAll('.header__menu-link');

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      burgerButton.classList.remove('active');
      nav.classList.remove('active');
    });
  });
};

export const closeOpenNavAuto = () => {
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.header__menu');

  window.addEventListener('resize', () => {
    const clientWidth = document.body.clientWidth;

    if (clientWidth > 767) {
      burgerButton.classList.remove('active');
      nav.classList.remove('active');
    }
  });
};

export const scrollSection = (event) => {
  const targetValue = event.currentTarget.dataset.target;
  const $section = document.querySelector(`[data-name="${targetValue}"]`);
  const $header = document.querySelector('[data-name="header"]');

  const clientPosition = window.pageYOffset;
  const sectionPosition = $section.getBoundingClientRect().top;
  const headerHeight = $header.getBoundingClientRect().height;
  const targetPosition = clientPosition + sectionPosition - headerHeight;

  handleMenuItemClick();
  window.scrollTo(0, targetPosition);
};
