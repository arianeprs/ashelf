import { SparklesIcon } from '@heroicons/react/24/solid';
import { Book } from '../data/book';

export default function BookItem({ book }: { book: Book }) {
  return (
    <div className="rounded-lg px-6 py-5 bg-softest-beige">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-l font-bold">{book.title}</h1>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-4 text-sm text-gray-600">{book.author}</div>

          <div className="col-span-2 flex justify-end items-center">
            {book.recommendedBy && (
              <div className="px-2 py-1 rounded-lg bg-soft-purple text-dark text-xs flex gap-1">
                <SparklesIcon className="size-3 text-dark m-auto" />
                from {book.recommendedBy}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
