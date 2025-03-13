const items = document.querySelectorAll('.faq__list-item');
const buttons = document.querySelectorAll('.faq__list-btn');
const textWrappers = document.querySelectorAll('.faq__list-text');

let heightWrapper = 0;

textWrappers.forEach((elem) => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        textWrappers[i].style.height = items[i].classList.contains(
          'faq__list-item_active'
        )
          ? ''
          : `${heightWrapper}px`;
        items[i].classList.toggle('faq__list-item_active');
      } else {
        items[i].classList.remove('faq__list-item_active');
        textWrappers[i].style.height = '';
      }
    }
  });
});
