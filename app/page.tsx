'use client';
import { useEffect, useReducer, useState } from 'react';

import Tabs from './components/tabs';
import { TabContext } from './context/TabContext.ts';
import BookList from './components/bookList';
import AddBookButton from './components/addBookButton';
import Header from './components/header';
import { Book, BookStatus } from './data/book.ts';
import { getApiBooks } from './routes/book.routes.ts';
import booksReducer from './context/BooksContext.ts';

export default function Home() {
  const [selectedTab, setSelected] = useState<BookStatus>('Finished');

  const [booksState, booksDispatch] = useReducer(booksReducer, {
    finishedBooks: [],
    wishlistBooks: [],
  });

  // Init call
  function getBooks() {
    getApiBooks().then((result) => {
      booksDispatch({
        type: 'loaded',
        books: {
          finishedBooks: result.finishedBooks,
          wishlistBooks: result.wishlistBooks,
        },
      });
    });
  }

  function updateBooksState(newBook: Book) {
    booksDispatch({
      type: 'added',
      book: newBook,
      selectedTab: selectedTab,
    });
  }

  function onTabClick(tab: BookStatus) {
    setSelected(tab);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabContext value={selectedTab}>
        <Tabs onTabClick={onTabClick} />
        <BookList wishBooks={booksState.wishlistBooks} finishedBooks={booksState.finishedBooks} />
        <AddBookButton onBookAdded={updateBooksState} />
      </TabContext>
    </div>
  );
}
