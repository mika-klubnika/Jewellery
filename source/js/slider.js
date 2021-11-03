if (document.querySelector('.swiper-pagination') &&
  document.querySelector('.swiper-mobile-pagination__current') &&
  document.querySelector('.swiper-mobile-pagination__total')) {

  let swiper;
  const swiperPaginationBlock = document.querySelector('.swiper-pagination');
  const current = document.querySelector('.swiper-mobile-pagination__current');
  const total = document.querySelector('.swiper-mobile-pagination__total');

  const ACTIVE_BULLET = 'swiper-pagination-bullet-active';
  const BREAKPOINT_MOBILE = 767;

  const initSwiper = () => {
    swiper = new Swiper(".swiper", {
      spaceBetween: 30,
      slidesPerView: 4,
      centeredSlides: false,
      centeredSlidesBounds: true,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      pagination: {
        el: '.slider__pagination--desktop',
        clickable: 'true',
        renderBullet(index, className) {
          return '<button class="' + className + '">' + (index + 1) + '</button>';
        },
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1022: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    });
  };

  const getBullets = () => {
    let bullets;
    if(swiperPaginationBlock) {
      bullets = swiperPaginationBlock.children;
    }
    return bullets
  }

  const setMobileTotalBullet = (bullets) => {
    let totalBullets = bullets.length;
    return totalBullets;
  }

  const getCurrentBullet = (bullets) => {
    let currentBullet;
    Array.from(bullets).forEach((element) => {
      if (element.classList.contains(ACTIVE_BULLET)) {
        currentBullet = +element.textContent;
      }
    });
    return currentBullet;
  }

  const renderMobilePagination = (bullets) => {
    total.textContent = setMobileTotalBullet(bullets);
    current.textContent = getCurrentBullet(bullets);
  }

  const changeIndex = (bullets) => {
    swiper.on('transitionEnd', () => {
      renderMobilePagination(bullets);
    });
  }

  const setMobilePagination = () => {
    let bullets = getBullets();
    changeIndex(bullets);
  }

  const changeBreakpoint = () => {
    let viewport = document.documentElement.clientWidth;

    if (viewport < BREAKPOINT_MOBILE) {
      setMobilePagination()
    }
  }

  const initMobilePagination = () => {
    let bullets = getBullets();
    renderMobilePagination(bullets);
  }

  const initSlider = () => {
    initSwiper();

    if (swiper && swiperPaginationBlock && current && total) {
      initMobilePagination();
      changeBreakpoint();
      swiper.on('breakpoint', changeBreakpoint);
    }
  }

  initSlider();
};
