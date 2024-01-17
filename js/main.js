// menu
const menuBtnGroupEl = document.getElementById('menu-btn-group');

menuBtnGroupEl.classList.remove('btn-group-vertical');
menuBtnGroupEl.classList.add('btn-group-horizontal');
menuBtnGroupEl.setAttribute('aria-label', 'Horizontal button group');

// header
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

// cards
const animalCardEl = document.getElementById('animal');
const cardsEl = document.getElementById('cards-container');
const animalBtnEl = animalCardEl.querySelector('a');
const cardsListEl = cardsEl.querySelectorAll('.card');

animalBtnEl.classList.add('bg-success', 'text-white', 'border-0');

const rightCardsList = [];
const rightSequence = ['Natureza', 'Animais', 'Pessoas', 'Tecnologia'];

for (let index = 0; index < rightSequence.length; index++) {
  const title = rightSequence[index];

  const el = Array.from(cardsListEl).find((card) => {
    const cardTitle = card.querySelector('h5').textContent;

    return cardTitle === title;
  });

  rightCardsList.push(el);
}

cardsEl.innerHTML = '';

for (let index = 0; index < rightCardsList.length; index++) {
  const card = rightCardsList[index];

  cardsEl.appendChild(card);
}

// lista
const listEl = document.getElementById('list-container');
const ulEl = listEl.querySelector('ul');

/** @param {string} text */
function createLiEl(text) {
  const liEl = document.createElement('li');
  liEl.textContent = text;

  liEl.classList.add('list-group-item');

  return liEl;
}

const fortyLiEl = createLiEl('Quarto item');
const fiftyLiEl = createLiEl('Quinto item');

ulEl.appendChild(fortyLiEl);
ulEl.appendChild(fiftyLiEl);

const liListEl = ulEl.querySelectorAll('li');

for (let index = 0; index < liListEl.length; index++) {
  const liEl = liListEl[index];

  if (liEl.classList.contains('active')) {
    liEl.classList.remove('active');

    continue;
  }

  if (liEl.textContent === 'Quarto item') {
    liEl.classList.add('active');
  }
}
