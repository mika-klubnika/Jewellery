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
