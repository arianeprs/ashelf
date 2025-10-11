'use client';
import { useState } from 'react';
import AddBookModal from './addBookModal';
import { PlusIcon } from '@heroicons/react/24/solid';
import { BookStatus } from '../data/book';

export default function AddBookButton({ selectedTab }: { selectedTab: BookStatus }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClickButton(isOpen: boolean) {
    setIsModalOpen(isOpen);
  }

  return (
    <div className="-mx-4 w-full md:w-[500px] fixed bg-gradient-to-t from-white to-white/10 bottom-0">
      <div className="flex justify-end">
        <button
          className="mb-15 mr-8 self-end font-mono  p-3 cursor-pointer bg-neutral-600 text-white rounded-full"
          onClick={() => handleClickButton(true)}>
          <PlusIcon className="size-6 text-white m-auto" />
        </button>
      </div>

      {isModalOpen && (
        <AddBookModal selectedTab={selectedTab} handleClickButton={handleClickButton} />
      )}
    </div>
  );
}
