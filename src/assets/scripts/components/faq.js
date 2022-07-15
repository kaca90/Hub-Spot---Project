'use strict';

const callToActionBtns = document.querySelectorAll('.faq__row-field');

callToActionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const currentBtn =
        e.target.parentElement.parentElement;
        currentBtn.classList.toggle('active');
    });
});
