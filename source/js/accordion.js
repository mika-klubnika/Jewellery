'use strict';
//аккордеон
// (function () {

  if (
    document.querySelector('.accordion') &&
    document.querySelectorAll('.accordion__button') &&
    document.querySelectorAll('.accordion__item')) {

      const accordion = document.querySelector('.accordion');
      const accordionButton = accordion.querySelectorAll('.accordion__button');
      const accordionItems = accordion.querySelectorAll('.accordion__item');

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
  }
// })
