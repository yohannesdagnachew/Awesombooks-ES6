export const list = document.getElementById('list');
export const awesomBook = [];

export const createBook = (book) => {
  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const removeBotton = document.createElement('button');
  const by = document.createElement('p');
  const newDiv = document.createElement('div');

  newDiv.classList.add('onebook');
  for (let i = 0; i < awesomBook.length; i += 1) {
    newDiv.classList.toggle('removebg');
  }

  by.innerHTML = 'by';
  removeBotton.classList = 'remove';
  liTitle.className = 'title-pe';
  liAuthor.className = 'title-pe';
  liTitle.appendChild(document.createTextNode(book.title));
  liAuthor.appendChild(document.createTextNode(book.author));
  removeBotton.innerText = 'Remove';
  newDiv.append(liTitle, by, liAuthor, removeBotton);
  list.appendChild(newDiv);
};
