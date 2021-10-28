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
