import { useTab } from '../context/TabContext';
import { BookStatus } from '../data/book';

export default function Tabs({ onTabClick }: { onTabClick: (tab: BookStatus) => void }) {
  const selectedTab: BookStatus = useTab();

  return (
    <div className="sticky top-0 relative flex flex-col gap-6">
      <div className="flex gap-2 font-mono text-sm w-full pt-4 pb-4 bg-white/75 dark:bg-slate-800/75 backdrop-blur">
        <button
          onClick={() => onTabClick('Finished')}
          className={`px-2 py-1 rounded-md cursor-pointer text-dark dark:text-slate-800 ${selectedTab === 'Finished' ? 'bg-indigo-300' : 'bg-stone-200'}`}>
          Finished
        </button>
        <button
          onClick={() => onTabClick('Wishlist')}
          className={`px-2 py-1 rounded-md cursor-pointer text-dark dark:text-slate-800 ${selectedTab === 'Wishlist' ? 'bg-lime-300' : 'bg-stone-200'}`}>
          Wishlist
        </button>
      </div>
    </div>
  );
}
