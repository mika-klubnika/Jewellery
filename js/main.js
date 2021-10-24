'use strict';
//аккордеон
const accordion = document.querySelector('.accordion');
const accordionButton = accordion.querySelectorAll('.accordion__button');
const accordionItems = accordion.querySelectorAll('.accordion__item');

if(accordion && accordionButton && accordionItems) {
  accordionItems.forEach(item => {
    item.classList.remove('accordion__item--nojs');
  })

  function toggleAccordion () {
    const thisItem = this.parentNode;

    accordionItems.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('accordion__item--active');
        return;
      }
      item.classList.remove('accordion__item--active');
    });
  }

  accordionButton.forEach(block => block.addEventListener('click', toggleAccordion));
}

'use strict';
//МЕНЮ
const header = document.querySelector('.header');
const navigation = header.querySelector('.navigation');
const toggle = header.querySelector('.header__toggle');

if (header && toggle) {
  header.classList.remove('header--nojs');

  toggle.addEventListener('click', () => {
    header.classList.toggle('header--open');

    if (header.classList.contains('header--open')) {
      toggle.setAttribute('aria-label', 'Закрыть меню');
    } else {
      toggle.setAttribute('aria-label', 'Открыть меню');
    }
  });
}
