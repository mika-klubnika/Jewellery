'use strict';
//аккордеон
const accordion = document.querySelector('.accordion');
const accordionButton = document.querySelectorAll('.accordion__button');
const accordionItems = document.querySelectorAll('.accordion__item');

if (accordion && accordionButton && accordionItems) {
  accordionItems.forEach(item => {
    item.classList.remove('accordion__item--nojs');
  })

  function toggleAccordion() {
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
};
