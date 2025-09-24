'use client';
import { useState } from 'react';

export default function AddBookButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClickButton(isOpen: boolean) {
    setIsModalOpen(isOpen);
  }

  return (
    <div>
      <button
        className={`self-end w-fit p-3 cursor-pointer rounded-md bg-stone-200 `}
        onClick={() => handleClickButton(true)}>
        Add book
      </button>

      <div
        className={` left-0 top-0 z-[1055] block h-full w-full overflow-y-auto overflow-x-hidden outline-none p-4 bg-white border-1 border-slate-200 rounded-md ${isModalOpen === true ? 'visible' : 'invisible'}`}>
        <input placeholder="Title"></input>
        <input placeholder="Author"></input>

        <button
          className="w-fit p-3 cursor-pointer rounded-md bg-stone-200"
          onClick={() => handleClickButton(false)}>
          Confirm
        </button>
      </div>
    </div>
  );
}
