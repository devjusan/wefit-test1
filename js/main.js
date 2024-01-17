// menu
const menuBtnGroupEl = document.getElementById('menu-btn-group');

menuBtnGroupEl.classList.remove('btn-group-vertical');
menuBtnGroupEl.classList.add('btn-group-horizontal');
menuBtnGroupEl.setAttribute('aria-label', 'Horizontal button group');

//header
const headerContainer = document.getElementById('header-container');
const headerBtn = headerContainer.querySelector('.btn');
const hrEl = headerContainer.querySelector('hr');
const descriptionEl = headerContainer.querySelector('.description');

headerContainer.classList.add(
  'd-flex',
  'flex-column',
  'align-items-end',
  'bg-secondary',
  'text-light'
);
headerBtn.classList.add('bg-success', 'text-white', 'border-0');
hrEl.classList.add('w-100');
descriptionEl.classList.add('text-right');
