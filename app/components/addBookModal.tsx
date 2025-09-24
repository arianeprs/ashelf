'use client';

export default function AddBookModal({
  handleClickButton,
}: {
  handleClickButton: (isOpen: boolean) => void;
}) {
  return (
    <div>
      <div className="fixed top-0 bottom-0 z-[1055] block h-[500px] w-[500px] overflow-y-auto overflow-x-hidden outline-none p-4 bg-white border-1 border-slate-200 rounded-md">
        <button
          className="w-fit p-3 cursor-pointer rounded-md bg-stone-200"
          onClick={() => handleClickButton(false)}>
          Close this atrocity
        </button>
      </div>
      <div className="bg-neutral-700  fixed z-[1054] left-0 top-0 opacity-40 w-screen h-screen"></div>
    </div>
  );
}
