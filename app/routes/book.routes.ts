import { Book, BookStatus } from '../data/book';

const BOOKS_PLACEHOLDERS_FINISHED = [
  {
    id: '01',
    title: 'Finished book',
    author: 'Random author',
    finishedOn: '2025-10-01',
    status: 'Finished',
    recommendedBy: 'Baltro',
  } as Book,
  {
    id: '02',
    title: 'The vanishing half',
    author: 'Brit Bennet',
    finishedOn: '2025-06-01',
    status: 'Finished',
  } as Book,
  {
    id: '03',
    title: 'J’irai cracher sur vos tombes',
    author: 'Boris Vian',
    finishedOn: '2025-06-01',
    status: 'Finished',
  } as Book,
  {
    id: '11',
    title: 'Trois femmes puissantes',
    author: 'Marie Ndaye',
    finishedOn: '2025-05-01',
    status: 'Finished',
  } as Book,
  {
    id: '12',
    title: 'Last one',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
  {
    id: '13',
    title: 'Lalala lala',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
  {
    id: '21',
    title: 'Last one',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
  {
    id: '22',
    title: 'Lalala lala',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
  {
    id: '23',
    title: 'Last one',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
  {
    id: '31',
    title: 'Lalala lala',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
  {
    id: '32',
    title: 'Last one',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
  {
    id: '33',
    title: 'Lalala lala',
    author: 'Random author',
    finishedOn: '2025-01-01',
    status: 'Finished',
  } as Book,
];
const BOOKS_PLACEHOLDERS_WISHLIST = [
  {
    id: '1',
    title: 'Wishlist book',
    author: 'Random author',
    status: 'Wishlist',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    status: 'Wishlist',
    recommendedBy: 'Baltro',
  } as Book,
];

export async function getApiBooks(selectedTab: string) {
export async function getApiBooks(selectedTab: BookStatus) {
  // TODO TANGO - this will be calling an actual API one day
  if (selectedTab === 'Finished') return BOOKS_PLACEHOLDERS_FINISHED;
  return BOOKS_PLACEHOLDERS_WISHLIST;
}
