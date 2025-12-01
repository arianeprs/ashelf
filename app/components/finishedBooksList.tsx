'use client';

import { Book } from '../data/book';
import BookItem from './bookItem';

export default function FinishedBooksList({ finishedBooks }: { finishedBooks: Book[] }) {
  function getFormattedDate(yearMonthDate: string): string {
    const [y, m] = yearMonthDate.split('-').map(Number);
    const d = new Date(y, (m || 1) - 1, 1);
    return new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(d);
  }

  const monthBooksGroups: [string, Book[]][] = (() => {
    const group = new Map<string, Book[]>();
    for (const book of finishedBooks) {
      const key = book.finishedOn?.slice(0, 7);
      if (!group.has(key)) group.set(key, []);
      group.get(key)!.push(book);
    }

    /* Sort months (most recent first) */
    const sorted = Array.from(group.entries()).sort((a, b) => b[0].localeCompare(a[0]));
    return sorted;
  })();

  return (
    <div className="flex flex-col w-full grow items-stretch gap-2.5 mb-40">
      {monthBooksGroups &&
        monthBooksGroups.map((monthBookGroup: [string, Book[]]) => (
          <div key={monthBookGroup[0]} className="flex flex-col gap-2.5">
            <div className="text-sm uppercase tracking-wide text-gray-500 py-1">
              {getFormattedDate(monthBookGroup[0])}
            </div>

            <div className="grid md:grid-cols-2 gap-2">
              {monthBookGroup[1].map((book) => (
                <BookItem key={book.id} book={book} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
