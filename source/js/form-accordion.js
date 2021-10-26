'use strict';
//аккордеон

if (
  document.querySelector('.form-accordion') &&
  document.querySelectorAll('.form-accordion__button') &&
  document.querySelectorAll('.form-accordion__item')) {

  const accordionForm = document.querySelector('.form-accordion');
  const accordionFormButton = accordionForm.querySelectorAll('.form-accordion__button');
  const accordionFormItems = accordionForm.querySelectorAll('.form-accordion__item');

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
      item.classList.remove('form-accordion__item--active');
    });
  }

  accordionFormButton.forEach(block => block.addEventListener('click', toggleAccordion));
}
