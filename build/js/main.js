'use strict';
//аккордеон

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

'use strict';
//ФИЛЬТР
// const header = document.querySelector('.header');
const filterForm = document.querySelector('.filter__form');
const filterToggle = document.querySelector('.filter__toggle');

if (filterForm && filterToggle) {
  // header.classList.remove('header--nojs');

  filterToggle.addEventListener('click', () => {
    filterForm.classList.toggle('filter__form--open');

    if (filterForm.classList.contains('filter__form--open')) {
      filterToggle.setAttribute('aria-label', 'Закрыть меню');
    } else {
      filterToggle.setAttribute('aria-label', 'Открыть меню');
    }
  });
}

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

'use strict';
//МЕНЮ
const header = document.querySelector('.header');
const navigation = header.querySelector('.navigation');
const toggle = header.querySelector('.header__toggle');

if (header && toggle && navigation) {
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

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,
//   slidesPerGroup: 2,
//   slidesPerView: 2,
//   centeredSlides: false,
//   centeredSlidesBounds: true,

//   // If we need pagination
//   // pagination: {
//   //   el: ".swiper-pagination",
//   //   clickable: true,
//   // },

//   // // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });
