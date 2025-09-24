'use client';
import { useState } from 'react';

import Tabs from './components/tabs';
import BookList from './components/bookList';
import AddBookButton from './components/addBookButton';
import Header from './components/header';

export default function Home() {
  const TABS = ['Finished', 'Wishlist', 'Loaned'];

  const [selectedTab, setSelected] = useState(TABS[0]);

  function handleClickTab(index: number) {
    setSelected(TABS[index]);
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Tabs selectedTab={selectedTab} TABS={TABS} handleClickTab={handleClickTab} />
      <BookList selectedTab={selectedTab} />
      <AddBookButton />
    </div>
  );
}
