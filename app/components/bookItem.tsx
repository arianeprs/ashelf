import { Book } from "../data/book";

export default function BookItem(book: Book) {
return (
    <div className="bg-stone-100 rounded-md p-4">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="text-gray-500">{book.author}</p>
        <p className="text-gray-500">{book.description}</p>
    </div>
)
}