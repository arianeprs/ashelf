import { Book } from "../data/book";
import BookItem from "./bookItem";

export default function BookList({ books }: { books: Book[] }) {    
    return (
        <div className="flex flex-col gap-2">
            {books.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    )
}