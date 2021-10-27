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
}
