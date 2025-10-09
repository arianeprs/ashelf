import { Book } from '../data/book';

export default function BookItem(book: Book) {
  return (
    <div className="bg-stone-100 rounded-md p-4">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-xl font-bold">{book.title}</h1>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-4 text-sm text-gray-600">{book.author}</div>

          <div className="col-span-2 flex justify-end items-center">
            {book.loanedTo && (
              <div className="px-1.5 py-0.5 rounded-md bg-slate-600 text-white text-xs">
                <div>Loaned to {book.loanedTo}</div>
              </div>
            )}
            {book.recommendedBy && (
              <div className="px-1.5 py-0.5 rounded-md bg-slate-600 text-white text-xs">
                Reco from {book.recommendedBy}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
