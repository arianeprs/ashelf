import { createContext, useContext } from 'react';
import { BookStatus } from '../data/book';

export const TabContext = createContext<BookStatus>('Finished');

export function useTab() {
  return useContext(TabContext);
}
