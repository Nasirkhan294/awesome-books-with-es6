import { showMain, showForm, showContact } from './sections.js';
import { activateLists, activateAddnew, activateContact } from './navigation.js';

const lists = document.getElementById('list-li');
const addnew = document.getElementById('addnew-li');
const cPage = document.getElementById('contact-li');

lists.addEventListener('click', () => {
  showMain();
  activateLists();
});

addnew.addEventListener('click', () => {
  showForm();
  activateAddnew();
});

cPage.addEventListener('click', () => {
  showContact();
  activateContact();
});
