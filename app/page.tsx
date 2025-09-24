'use client';
import { useState } from 'react';

import Tabs from './components/tabs';
import BookList from './components/bookList';
import AddBookButton from './components/addBookButton';

export default function Home() {
  const TABS = ['Finished', 'Wishlist', 'Loaned'];

  const [selectedTab, setSelected] = useState(TABS[0]);

  function handleClickTab(index: number) {
    setSelected(TABS[index]);
  }

  return (
    <div className="relative font-sans justify-items-center items-center min-h-screen p-8 pb-20 gap-16">
      <div className="sticky top-0 relative flex flex-col gap-6">
        <Tabs selectedTab={selectedTab} TABS={TABS} handleClickTab={handleClickTab} />
      </div>

      <BookList selectedTab={selectedTab} />

      <AddBookButton />
    </div>
  );
}
