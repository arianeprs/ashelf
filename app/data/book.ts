export type Book = {
  id: string;  
  title: string
  author: string
  description: string;
  status: BookStatus;
  finishedAt?: Date;
  recommendedBy?: string;
  loanedTo?: string;
}

export type BookStatus = "finished" | "wishlist" | "reading" | "loaned";