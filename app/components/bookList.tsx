'use client';
import { useEffect, useState } from 'react';

import { Book } from '../data/book';
import { getApiBooks } from '../routes/book.routes';
import BookItem from './bookItem';
import EmptyList from './emptyList';

export default function BookList({ selectedTab }: { selectedTab: string }) {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      const data = await getApiBooks(selectedTab);
      if (!ignore) setBooks(data);
    })();
    return () => {
      ignore = true;
    };
  }, [selectedTab]);

  return (
    <div className="flex flex-col w-full grow items-stretch gap-2">
      {books && books.length > 0 ? (
        books.map((book) => <BookItem key={book.id} {...book} />)
      ) : (
        <EmptyList />
      )}
    </div>
  );
}
