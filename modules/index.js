import times from './date.js';
import Info from './info.js';
import { list, awesomBook, createBook } from './creatbook.js';
const add = document.getElementById('add-button');

add.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Info(title.value, author.value);
  awesomBook.push(book);
  createBook(book);
  localStorage.setItem('awesomBook', JSON.stringify(awesomBook));

  title.value = '';
  author.value = '';
});

list.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
    const newAwesemBook = awesomBook.filter(
      (ele) => ele.Title !== e.target.parentElement.children[0].innerText
    );

    awesomBook.splice(awesomBook.indexOf(newAwesemBook), 1);
    localStorage.setItem('awesomBook', JSON.stringify(awesomBook));
  }
});

const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contactLink = document.querySelector('.contact-link');

const allSection = document.querySelector('.all');
const inputSection = document.querySelector('.input-form');
const contactSection = document.querySelector('.contact');
const copyRight = document.querySelector('.copy-right');
const linksAll = document.querySelector('.links-all');
const linksAdd = document.querySelector('.links-add');
const linksContact = document.querySelector('.links-contact');

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'flex';
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
  copyRight.style.marginTop = '5%';
  linksAll.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksContact.style.color = 'black';
});
addLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'flex';
  contactSection.style.display = 'none';
  copyRight.style.marginTop = '23%';
  linksAdd.style.color = 'blue';
  linksAll.style.color = 'black';
  linksContact.style.color = 'black';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'flex';
  copyRight.style.marginTop = '19%';
  linksContact.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksAll.style.color = 'black';
});

setInterval(() => {
  times();
}, 1000);
