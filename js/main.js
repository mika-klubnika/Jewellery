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

'use strict';
//ФИЛЬТР
const filter = document.querySelector('.filter');
const filterForm = document.querySelector('.filter__form');
const filterOpen = document.querySelector('.filter__open');
const filterClose = document.querySelector('.filter__close');

if (filterForm && filterOpen && filterClose) {
  filter.classList.remove('filter--nojs');

  filterOpen.addEventListener('click', () => {
    filterForm.classList.add('filter__form--open');
  })

  filterClose.addEventListener('click', () => {
    filterForm.classList.remove('filter__form--open');
  })
};

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

'use strict';

const modal = document.querySelector('.login');
const modalButton = document.querySelector('.header__login');
const modalBase = modal.querySelector('.login__base');
const modalClose = modal.querySelector('.login__close');

const form = modal.querySelector('form');
const email = modal.querySelector('#email');
const password = modal.querySelector('#password');

const isStorageSupport = true;
const storage = {};

if (modal && modalButton && modalBase && modalClose && form && email && password) {
  try {
    storage.email = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  modalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('login--open');
    document.body.classList.add('hidden');

    if (storage.name) {
      email.value = storage.email;
      password.focus();
    } else {
      email.focus();
    }
  });

  modalBase.addEventListener('click', (evt) => {
    if(evt.target === modalBase) {
      modal.classList.remove('login--open')
      document.body.classList.remove('hidden');
    }
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('login--open');
    document.body.classList.remove('hidden');
  });

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      localStorage.setItem('email', email.value);
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('login--open')) {
        modal.classList.remove('login--open');
        document.body.classList.remove('hidden');
      }
    }
  });
};

'use strict';
//МЕНЮ
const header = document.querySelector('.header');
const navigation = header.querySelector('.navigation');
const toggle = header.querySelector('.header__toggle');
const linkLogin = header.querySelector('.header__login');

if (header && toggle && navigation) {
  header.classList.remove('header--nojs');

  toggle.addEventListener('click', () => {
    header.classList.toggle('header--open');

    if (header.classList.contains('header--open')) {
      toggle.setAttribute('aria-label', 'Close menu');
    } else {
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });

  linkLogin.addEventListener('click', () => {
    header.classList.remove('header--open');
  });
};

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
