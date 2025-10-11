export type Book = {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  finishedOn: string /* 'YYYY-MM-DD' */;
  recommendedBy?: string;
};

export type BookStatus = 'Finished' | 'Wishlist';
