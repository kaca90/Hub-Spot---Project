'use strict';
//  footer
const DropdownMenu = document.querySelectorAll('.hs-item-has-children');

DropdownMenu.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const currentBtn = e.target;
        currentBtn.classList.toggle('active-menu');
    });
});
