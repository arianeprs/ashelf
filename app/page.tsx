'use client';
import { useState } from "react";

import Tabs from "./components/tabs";
import BookList from "./components/bookList";
import { Book } from "./data/book";
import AddBookButton from "./components/addBookButton";

const BOOKS_PLACEHOLDERS_FINISHED = [
  {
    id: "1",
    title: "Finished book",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
  {
    id: "2",
    title: "Lalala lala",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
  {
    id: "3",
    title: "Last one",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
]
const BOOKS_PLACEHOLDERS_WISHLIST = [
  {
    id: "1",
    title: "Wishlist book",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
  {
    id: "2",
    title: "Lalala lala",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
  {
    id: "3",
    title: "Last one",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
]
const BOOKS_PLACEHOLDERS_LOANED= [
  {
    id: "1",
    title: "Loaned book",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
  {
    id: "2",
    title: "Lalala lala",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
  {
    id: "3",
    title: "Last one",
    author: "Random author",
    description: "Random desc",
    status: "finished",
  }as Book,
]

export default function Home() {

  const TABS = ['Finished', 'Wishlist', 'Loaned'];
  
  const [selectedTab, setSelected] = useState(TABS[0]);

  function handleClickTab(index: number) {
    setSelected(TABS[index]);
  }
  function getBooks(){
    if (selectedTab === 'Finished') return BOOKS_PLACEHOLDERS_FINISHED;
    if (selectedTab === 'Wishlist') return BOOKS_PLACEHOLDERS_WISHLIST;
    return BOOKS_PLACEHOLDERS_LOANED;
  }

  function getColor(){
    if (selectedTab === 'Finished') return "bg-indigo-300";
    if (selectedTab === 'Wishlist') return "bg-lime-300";
    return "bg-pink-300";
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="h-full w-1/3 flex flex-col gap-6">
          <Tabs 
            selectedTab={selectedTab} 
            TABS={TABS} 
            handleClickTab={handleClickTab} />
          <BookList books={getBooks()}/>
          <AddBookButton buttonColor={getColor()}/>
      </div>

      
    </div>
  );
}

// export  function Home() {
//   return ( 
//   <div>
//   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <li className="flex flex-col gap-4">
//           <BookItem title="The Great Gatsby" author="F. Scott Fitzgerald" description="A classic novel about the American Dream" image="https://via.placeholder.com/150" />
//           <BookItem title="The Great Gatsby" author="F. Scott Fitzgerald" description="A classic novel about the American Dream" image="https://via.placeholder.com/150" />
//         </li>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer> 
//       </div>
//       )
//     }
