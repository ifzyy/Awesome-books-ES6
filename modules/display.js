/* eslint-disable import/extensions */
import AwesomeBooks from './book.js';

const display = () => {
  const awesomeBooks = new AwesomeBooks();
  awesomeBooks.load();
  if (awesomeBooks.getBooks().length < 1) {
    awesomeBooks.addBook('The Power of Focus', 'Mark Victor Hansen');
  }

  const bookListSection = document.querySelector('#book-list');
  function renderBookList() {
    bookListSection.innerHTML = awesomeBooks.getBooks().map((book, index) => `
          <article class="book ${index % 2 === 0 ? 'dark' : ''}">
              <div>
                  <p class="title">"${book.title}" by ${book.author}</p>
              </div>
              <button data-id=${book.id} class="remove">Remove</button>
          </article>`).join('');
  }
  renderBookList();
  const addBookForm = document.querySelector('#add-book');
  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.querySelector('#title').value;
    const author = event.target.querySelector('#author').value;
    awesomeBooks.addBook(title, author);
    event.target.reset();
    renderBookList();
  });

  bookListSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
      const { id } = event.target.dataset;
      awesomeBooks.deleteBook(+id);
      renderBookList();
    }
  });
};
export default display();