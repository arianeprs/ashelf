type TabsProps = { selectedTab: string; TABS: string[]; handleClickTab: (index: number) => void };

export default function Tabs({ selectedTab, TABS, handleClickTab }: TabsProps) {
  return (
    <div className="sticky top-0 relative flex flex-col gap-6">
      <div className="flex gap-2 font-mono text-sm w-full bg-white pt-4 pb-4">
        <button
          onClick={() => handleClickTab(0)}
          className={`px-2 py-1 rounded-md cursor-pointer ${selectedTab === TABS[0] ? 'bg-indigo-300' : 'bg-stone-200'}`}>
          Finished
        </button>
        <button
          onClick={() => handleClickTab(1)}
          className={`px-2 py-1 rounded-md cursor-pointer ${selectedTab === TABS[1] ? 'bg-lime-300' : 'bg-stone-200'}`}>
          Wishlist
        </button>
        <button
          onClick={() => handleClickTab(2)}
          className={`px-2 py-1 rounded-md cursor-pointer ${selectedTab === TABS[2] ? 'bg-pink-300' : 'bg-stone-200'}`}>
          Loaned
        </button>
      </div>
    </div>
  );
}
