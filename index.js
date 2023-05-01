import BookCollection from './modules/bookCollection.js';
import './modules/listeners.js';

const loadBook = () => {
  const bookCollection = new BookCollection();
  BookCollection(bookCollection);
};

loadBook();
