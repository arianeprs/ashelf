'use client';
import { useState } from 'react';

import Tabs from './components/tabs';
import { TabContext } from './context/TabContext.ts';
import BookList from './components/bookList';
import AddBookButton from './components/addBookButton';
import Header from './components/header';
import { BookStatus } from './data/book.ts';

export default function Home() {
  const [selectedTab, setSelected] = useState<BookStatus>('Finished');

  function onTabClick(tab: BookStatus) {
    setSelected(tab);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabContext value={selectedTab}>
        <Tabs onTabClick={onTabClick} />
        <BookList />
        <AddBookButton />
      </TabContext>
    </div>
  );
}
