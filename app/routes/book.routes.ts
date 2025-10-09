import { Book } from '../data/book';

const BOOKS_PLACEHOLDERS_FINISHED = [
  {
    id: '01',
    title: 'Finished book',
    author: 'Random author',
    status: 'finished',
    recommendedBy: 'Baltro',
  } as Book,
  {
    id: '02',
    title: 'The vanishing half',
    author: 'Brit Bennet',
    status: 'finished',
  } as Book,
  {
    id: '03',
    title: 'J’irai cracher sur vos tombes',
    author: 'Boris Vian',
    status: 'finished',
  } as Book,
  {
    id: '11',
    title: 'Trois femmes puissantes',
    author: 'Marie Ndaye',
    status: 'finished',
  } as Book,
  {
    id: '12',
    title: 'Last one',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '13',
    title: 'Lalala lala',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '21',
    title: 'Last one',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '22',
    title: 'Lalala lala',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '23',
    title: 'Last one',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '31',
    title: 'Lalala lala',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '32',
    title: 'Last one',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '33',
    title: 'Lalala lala',
    author: 'Random author',
    status: 'finished',
  } as Book,
];
const BOOKS_PLACEHOLDERS_WISHLIST = [
  {
    id: '1',
    title: 'Wishlist book',
    author: 'Random author',
    status: 'finished',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    status: 'finished',
    recommendedBy: 'Baltro',
  } as Book,
];
const BOOKS_PLACEHOLDERS_LOANED = [
  {
    id: '1',
    title: 'Loaned book',
    author: 'Random author',
    status: 'finished',
    loanedTo: 'Côme',
  } as Book,
  {
    id: '2',
    title: 'Lalala lala',
    author: 'Random author',
    status: 'finished',
    loanedTo: 'Kakoz',
  } as Book,
  {
    id: '3',
    title: 'Last one',
    author: 'Random author',
    status: 'finished',
    loanedTo: 'Balt',
  } as Book,
];

export async function getApiBooks(selectedTab: string) {
  // TODO TANGO - this will be calling an actual API one day
  if (selectedTab === 'Loaned') return BOOKS_PLACEHOLDERS_LOANED;
  if (selectedTab === 'Finished') return BOOKS_PLACEHOLDERS_FINISHED;
  return BOOKS_PLACEHOLDERS_WISHLIST;
}
