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
