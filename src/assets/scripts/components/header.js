'use strict';
// header
const callToActionBtns = document.querySelectorAll('.header__burger');

callToActionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const prevBtn =
        e.target.parentElement.parentElement.previousElementSibling;
        prevBtn.classList.toggle('active');

        const currentBtn =
        e.target.parentElement;
        currentBtn.classList.toggle('open');
    });
});
