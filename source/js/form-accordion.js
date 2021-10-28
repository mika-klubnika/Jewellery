'use strict';
//аккордеон
const accordionForm = document.querySelector('.form-accordion');
const accordionFormButton = document.querySelectorAll('.form-accordion__button');
const accordionFormItems = document.querySelectorAll('.form-accordion__item');

if (accordionForm && accordionFormButton && accordionFormItems) {
  accordionFormItems.forEach(item => {
    item.classList.remove('form-accordion__item--nojs');
  })

  function toggleAccordion() {
    const thisItem = this.parentNode;

    accordionFormItems.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('form-accordion__item--active');
        return;
      }
    });
  }

  accordionFormButton.forEach(block => block.addEventListener('click', toggleAccordion));
};
