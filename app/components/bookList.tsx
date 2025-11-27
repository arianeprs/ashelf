'use client';
import { useEffect, useState } from 'react';

import { Book, BookStatus } from '../data/book';
import { getApiBooks } from '../routes/book.routes';
import BookItem from './bookItem';
import EmptyList from './emptyList';
import FinishedBooksList from './finishedBooksList';
import { useTab } from '../context/TabContext';

export default function BookList() {
  const selectedTab: BookStatus = useTab();
  const [wishBooks, setWishBooks] = useState<Book[]>([]);
  const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);

  const hasWishBooksToShow = !!wishBooks && wishBooks.length > 0;
  const hasFinishedBooksToShow = !!finishedBooks && finishedBooks.length > 0;

  /* Load books once */
  useEffect(() => {
    const getBooks = async () => {
      getApiBooks('Finished').then((result) => {
        if (!ignore) {
          setFinishedBooks(result);
        }
      });

      getApiBooks('Wishlist').then((result) => {
        if (!ignore) {
          setWishBooks(result);
        }
      });
    };

    let ignore = false;
    getBooks();

    return () => {
      ignore = true;
    };
  });

  return (
    <div className="flex flex-col w-full grow items-stretch gap-2.5 mb-40">
      {selectedTab === 'Finished' &&
        (hasFinishedBooksToShow ? (
          <FinishedBooksList finishedBooks={finishedBooks} />
        ) : (
          <EmptyList />
        ))}

      {selectedTab === 'Wishlist' &&
        (hasWishBooksToShow ? (
          wishBooks.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <EmptyList />
        ))}
    </div>
  );
}
