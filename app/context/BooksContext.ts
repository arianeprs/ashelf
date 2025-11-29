import { createContext } from 'react';
import { Book, BookStatus } from '../data/book';

export type BookAction = {
  id?: string;
  type: 'added' | 'deleted' | 'changed' | 'loaded';
  selectedTab?: BookStatus;
  book?: Book;
  books?: BooksContextT;
};

export type BooksContextT = {
  finishedBooks: Book[];
  wishlistBooks: Book[];
};

export const BooksContext = createContext<BooksContextT>({ finishedBooks: [], wishlistBooks: [] });

export default function booksReducer(books: BooksContextT, action: BookAction) {
  switch (action.type) {
    case 'loaded': {
      return {
        finishedBooks: [...(action?.books?.finishedBooks ?? [])],
        wishlistBooks: [...(action?.books?.wishlistBooks ?? [])],
      };
    }
    case 'added': {
      if (!action.book) {
        throw Error('Book is required for "added" action');
      }
      if (action.selectedTab === 'Finished') {
        return {
          wishlistBooks: books.wishlistBooks,
          finishedBooks: [...books.finishedBooks, action.book],
        };
      } else if (action.selectedTab === 'Wishlist') {
        return {
          wishlistBooks: [...books.wishlistBooks, action.book],
          finishedBooks: books.finishedBooks,
        };
      }
      throw Error('Unknown tab: ' + action.selectedTab);
    }
    case 'changed': {
      // TODO TANGO
      //   return books.map((t) => {
      //     if (t.id === action.book?.id) {
      //       return action.book;
      //     } else {
      //       return t;
      //     }
      //   });
    }
    case 'deleted': {
      // TODO TANGO
      //   return books.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
