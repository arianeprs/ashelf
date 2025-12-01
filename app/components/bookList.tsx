'use client';

import { Book, BookStatus } from '../data/book';
import BookItem from './bookItem';
import EmptyList from './emptyList';
import FinishedBooksList from './finishedBooksList';
import { useTab } from '../context/TabContext';

export default function BookList({
  wishBooks,
  finishedBooks,
}: {
  wishBooks: Book[];
  finishedBooks: Book[];
}) {
  const selectedTab: BookStatus = useTab();

  const hasWishBooksToShow = !!wishBooks && wishBooks.length > 0;
  const hasFinishedBooksToShow = !!finishedBooks && finishedBooks.length > 0;

  return (
    <div className="flex flex-col w-full grow items-stretch gap-2.5 mb-40">
      {(selectedTab === 'Finished' && hasFinishedBooksToShow && (
        <FinishedBooksList finishedBooks={finishedBooks} />
      )) ||
        (!hasFinishedBooksToShow && <EmptyList />)}

      {selectedTab === 'Wishlist' &&
        (hasWishBooksToShow ? (
          <div className="grid md:grid-cols-2 gap-2">
            {wishBooks.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <EmptyList />
        ))}
    </div>
  );
}
