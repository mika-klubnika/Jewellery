'use strict';

if (document.querySelector('.slider')) {
  const slider = new Swiper('.swiper', {
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
    pagination: {
      el: '.slider__pagination',
      renderBullet(index, bulletClass) {
        return `<button class="` + bulletClass + `"type="button">` + (index + 1) + `</button>`;
      },
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__current-page',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'fraction',
          renderFraction(currentClass, totalClass, index, total) {
            return `<span class="` + currentClass + `"type="button">0 ` + index + ` </span>` +
              `&nbsp;of&nbsp;` + `<span class="` + totalClass + `"type="button">0 ` + total + ` </span>`;
          },
        },
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'bullets',
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: 'bullets',
        },
      },
    },
    lazy: {
      loadPrevNext: true,
    },
    spaceBetween: 30,
    speed: 1000,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    watchSlidesVisibility: true,
  });

  slider.on('progress', () => {
    inertNotVisible();
  });

  const inertNotVisible = () => {
    slider.slides.forEach((slide) => {
      if (!slide.classList.contains('swiper-slide-visible')) {
        slide.childNodes[1].setAttribute('tabindex', '-1');
      } else {
        slide.childNodes[1].setAttribute('tabindex', '0');
      }
    });
    if (slider.pagination.bullets) {
      slider.pagination.bullets.forEach((bullet) => {
        if (bullet.classList.contains('pagination__current-page')) {
          bullet.setAttribute('tabIndex', '-1');
        } else {
          bullet.setAttribute('tabIndex', '0');
        }
      });
    }
  };

  setTimeout(inertNotVisible, 0);
}
