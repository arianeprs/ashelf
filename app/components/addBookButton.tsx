'use client';
import { useState } from 'react';
import AddBookModal from './addBookModal';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useTab } from '../context/TabContext';
import { BookStatus } from '../data/book';

export default function AddBookButton({
  onBookAdded,
}: {
  onBookAdded: (selectedTab: BookStatus) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedTab = useTab();

  function handleClickButton(isOpen: boolean) {
    setIsModalOpen(isOpen);
  }

  return (
    <div className="-mx-4 w-full md:w-[500px] fixed bg-gradient-to-t from-white to-white/10 bottom-0">
      <div className="flex justify-end">
        <button
          className={`mb-15 mr-8 self-end font-mono p-3 cursor-pointer rounded-full ${selectedTab === 'Finished' ? 'bg-indigo-300' : 'bg-lime-300'}`}
          onClick={() => handleClickButton(true)}>
          <PlusIcon className="size-6 text-black m-auto" />
        </button>
      </div>

      {isModalOpen && (
        <AddBookModal onBookAdded={onBookAdded} handleClickButton={handleClickButton} />
      )}
    </div>
  );
}
