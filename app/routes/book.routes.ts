import { Book } from '../data/book';

const BOOKS_PLACEHOLDERS_FINISHED = [
  {
    id: '1',
    title: 'Finished book',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
    recommendedBy: 'Baltro',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
];
const BOOKS_PLACEHOLDERS_WISHLIST = [
  {
    id: '1',
    title: 'Wishlist book',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
    recommendedBy: 'Baltro',
  } as Book,
];
const BOOKS_PLACEHOLDERS_LOANED = [
  {
    id: '1',
    title: 'Loaned book',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
    loanedTo: 'Côme',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
    loanedTo: 'Kakoz',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    description: 'Random desc',
    status: 'finished',
    loanedTo: 'Baltro',
  } as Book,
];

export async function getApiBooks(selectedTab: string) {
  // TODO TANGO - this will be calling an actual API one day
  if (selectedTab === 'Loaned') return BOOKS_PLACEHOLDERS_LOANED;
  if (selectedTab === 'Finished') return BOOKS_PLACEHOLDERS_FINISHED;
  return BOOKS_PLACEHOLDERS_WISHLIST;
}
