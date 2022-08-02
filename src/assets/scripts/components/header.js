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

// const openDropdownBtns = document.querySelectorAll('.hs-item-has-children');

// openDropdownBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const currentBtn =
//         e.target.children[1];
//         currentBtn.classList.toggle('active');
//     });
// });

