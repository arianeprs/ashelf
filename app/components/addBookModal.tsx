'use client';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { addBookToList } from '../routes/book.routes';
import { Book, BookStatus } from '../data/book';

export default function AddBookModal({
  handleClickButton,
  selectedTab,
}: {
  handleClickButton: (isOpen: boolean) => void;
  selectedTab: BookStatus;
}) {
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Read the form data
    const form = event.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    // Make up a new book on the go
    const newBook: Book = {
      id: '000001', // TODO TANGO
      title: String(formJson.title),
      author: String(formJson.author),
      status: selectedTab,
      finishedOn: '2025-03-15', // TODO TANGO - fix input for month/year
    };

    addBookToList(selectedTab, newBook).then(() => handleClickButton(false));
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="fixed top-0 bottom-0 z-[1055] block h-screen w-[500px] overflow-y-auto overflow-x-hidden outline-none p-4 bg-white border-1 border-slate-200 rounded-md">
          <div className="flex flex-col gap-4 justify-stretch">
            <button
              className="w-fit p-1 cursor-pointer rounded-md bg-stone-100 self-end "
              onClick={() => handleClickButton(false)}>
              <XMarkIcon className="size-5 text-slate-700" />
            </button>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="title">Title</label>
              <input
                className="w-full px-2 py-1.5 border border-slate-400 rounded-md"
                type="text"
                id="title"
                name="title"
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="author">Author</label>
              <input
                className="w-full px-2 py-1.5 border border-slate-400 rounded-md"
                type="text"
                id="author"
                name="author"
                required
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-0.5 grow">
                  <label htmlFor="month">Month</label>
                  <input
                    className="w-full px-2 py-1.5 border border-slate-400 rounded-md"
                    type="text"
                    id="month"
                    name="month"
                    required
                  />
                </div>
                <div className="flex flex-col gap-0.5 grow">
                  <label htmlFor="year">Year</label>
                  <input
                    className="w-full px-2 py-1.5 border border-slate-400 rounded-md"
                    type="text"
                    id="year"
                    name="year"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-fit p-3 cursor-pointer rounded-md bg-stone-200 self-end">
              Add to finished
            </button>
          </div>
        </div>
        <div
          className="bg-neutral-700 fixed z-[1054] left-0 top-0 opacity-40 w-screen h-screen"
          onClick={() => handleClickButton(false)}></div>
      </form>
    </div>
  );
}
