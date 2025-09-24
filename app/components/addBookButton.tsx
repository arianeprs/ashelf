'use client';
import { useState } from 'react';
import AddBookModal from './addBookModal';

export default function AddBookButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClickButton(isOpen: boolean) {
    setIsModalOpen(isOpen);
  }

  return (
    <div className="-mx-4 w-full md:w-[500px] fixed bg-gradient-to-t from-white to-white/10 bottom-0">
      <div className="flex justify-end">
        <button
          className="mb-15 mr-8 self-end font-mono w-12 h-12 p-3 cursor-pointer bg-neutral-600 text-white rounded-full"
          onClick={() => handleClickButton(true)}></button>
      </div>

      {isModalOpen && <AddBookModal handleClickButton={handleClickButton} />}
    </div>
  );
}
