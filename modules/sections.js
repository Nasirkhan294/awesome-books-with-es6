const main = document.querySelector('.main-section');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact');

export const showMain = () => {
  main.classList.remove('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
};

export const showForm = () => {
  form.classList.remove('hide', 'hide-onload');
  main.classList.add('hide');
  contact.classList.add('hide');
};

export const showContact = () => {
  contact.classList.remove('hide', 'hide-onload');
  main.classList.add('hide');
  form.classList.add('hide');
};
