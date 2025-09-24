import { Book } from '../data/book';

export default function BookItem(book: Book) {
  return (
    <div className={`bg-stone-100 rounded-md p-4 ${book.loanedTo && 'opacity-65'}`}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-1 w-full">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          {book.recommendedBy && (
            <div className="px-1.5 py-0.5 rounded-md bg-lime-700 text-white text-xs">
              Reco from {book.recommendedBy}
            </div>
          )}
        </div>
        <div>
          <p className="text-gray-500">{book.author}</p>
          <p className="text-gray-500">{book.description}</p>
        </div>
      </div>

      <div className="flex justify-end">
        {book.loanedTo && (
          <div className="px-1.5 py-0.5 rounded-md bg-slate-800 text-white text-xs">
            Loaned to {book.loanedTo}
          </div>
        )}
      </div>
    </div>
  );
}
