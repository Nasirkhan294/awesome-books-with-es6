const lists = document.getElementById('list-li');
const addnew = document.getElementById('addnew-li');
const cPage = document.getElementById('contact-li');

export const activateLists = () => {
  lists.classList.add('active');
  addnew.classList.remove('active');
  cPage.classList.remove('active');
};

export const activateAddnew = () => {
  lists.classList.remove('active');
  addnew.classList.add('active');
  cPage.classList.remove('active');
};

export const activateContact = () => {
  lists.classList.remove('active');
  addnew.classList.remove('active');
  cPage.classList.add('active');
};
