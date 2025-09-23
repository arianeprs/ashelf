export type Book = {
  id: string;  
  title: string
  author: string
  description: string;
  status: BookStatus;
  finishedAt?: Date;
  recommendedFrom?: string;
  loanedTo?: string;
}

export type BookStatus = "finished" | "wishlist" | "reading" | "loaned";