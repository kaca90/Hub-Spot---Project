'use strict';

// import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

import Swiper from 'swiper';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
        const swiperInstances = {
            category:         { instance: null, init: false },
            big:              { instance: null, init: false },
        };

        const categorySlider = $('.logos__slider');

        function setupCategorySlider () {
            swiperInstances.category.instance = new Swiper(categorySlider[0], { // eslint-disable-line
                slidesPerView: 5,
                slidesPerGroup: 1,
                freeMode: true,
                freeModeMomentumRatio: sliderMomentumRatio,
                loop: true,
                loopFillGroupWithBlank: false,
                dynamicBullets: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    // type: 'bullets',
                },
                navigation: {
                    nextEl: '.logos__slider__nav-next',
                    prevEl: '.logos__slider__nav-prev',
                },

            });
        }

        if (categorySlider.length > 0) {
            if (!IsInitialized(categorySlider)) {
                setupCategorySlider();
            }
        }
    });
}

