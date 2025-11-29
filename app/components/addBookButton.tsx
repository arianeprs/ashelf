'use client';
import { useState } from 'react';
import AddBookModal from './addBookModal';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useTab } from '../context/TabContext';
import { Book } from '../data/book';

export default function AddBookButton({ onBookAdded }: { onBookAdded: (newBook: Book) => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedTab = useTab();

  return (
    <div className="-mx-4 w-full md:w-[500px] fixed bg-gradient-to-t from-white to-white/10 bottom-0">
      <div className="flex justify-end">
        <button
          className={`mb-15 mr-8 self-end font-mono p-3 cursor-pointer rounded-full ${selectedTab === 'Finished' ? 'bg-indigo-300' : 'bg-lime-300'}`}
          onClick={() => setIsModalOpen(true)}>
          <PlusIcon className="size-6 text-black m-auto" />
        </button>
      </div>

      {isModalOpen && (
        <AddBookModal onBookAdded={onBookAdded} onModalClosed={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
