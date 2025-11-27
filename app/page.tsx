'use client';
import { useEffect, useState } from 'react';

import Tabs from './components/tabs';
import { TabContext } from './context/TabContext.ts';
import BookList from './components/bookList';
import AddBookButton from './components/addBookButton';
import Header from './components/header';
import { Book, BookStatus } from './data/book.ts';
import { getApiBooks } from './routes/book.routes.ts';

export default function Home() {
  const [selectedTab, setSelected] = useState<BookStatus>('Finished');

  // =============== BOOKS STATE ===========
  const [wishBooks, setWishBooks] = useState<Book[]>([]);
  const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);

  // Init call
  function getBooks() {
    getApiBooks('Finished').then((result) => {
      setFinishedBooks(result);
    });
    getApiBooks('Wishlist').then((result) => setWishBooks(result));
  }

  function updateBooksState(selectedTab: BookStatus) {
    if (selectedTab === 'Finished') {
      setFinishedBooks([...finishedBooks]);
    } else if (selectedTab === 'Wishlist') {
      setWishBooks([...wishBooks]);
    }
  }

  function onTabClick(tab: BookStatus) {
    setSelected(tab); // TODO TANGO - move to reducer so we "reload" every time tab changes or book is added
  }

  useEffect(() => getBooks());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabContext value={selectedTab}>
        <Tabs onTabClick={onTabClick} />
        <BookList wishBooks={wishBooks} finishedBooks={finishedBooks} />
        <AddBookButton onBookAdded={updateBooksState} />
      </TabContext>
    </div>
  );
}
