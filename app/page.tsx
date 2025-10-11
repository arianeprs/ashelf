'use client';
import { useState } from 'react';

import Tabs from './components/tabs';
import BookList from './components/bookList';
import AddBookButton from './components/addBookButton';
import Header from './components/header';
import { BookStatus } from './data/book';

export default function Home() {
  const TABS: BookStatus[] = ['Finished', 'Wishlist'];

  const [selectedTab, setSelected] = useState(TABS[0]);

  function handleClickTab(index: number) {
    setSelected(TABS[index]);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Tabs selectedTab={selectedTab} TABS={TABS} handleClickTab={handleClickTab} />
      <BookList selectedTab={selectedTab} />
      <AddBookButton selectedTab={selectedTab} />
    </div>
  );
}
