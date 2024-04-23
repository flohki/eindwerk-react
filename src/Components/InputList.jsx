export default function InputList() {
  return (
    <div className="my-8">
      <div className="flex gap-2 items-center mb-2">
        Category:{" "}
        <button
          type="button"
          className="transition border border-blue-500 bg-blue-500 text-blue-100 px-4 py-1 rounded-full"
        >
          Documents
        </button>
        <button
          type="button"
          className="transition border border-neutral-200 text-neutral-500 px-4 py-1 rounded-full"
        >
          Clothes
        </button>
        <button
          type="button"
          className="transition border border-neutral-200 text-neutral-500 px-4 py-1 rounded-full"
        >
          Camping gear
        </button>
        <button
          type="button"
          className="transition border border-neutral-200 text-neutral-500 px-4 py-1 rounded-full"
        >
          Toiletry
        </button>
      </div>
      <form className="flex rounded-lg overflow-hidden">
        <input
          placeholder="What would you like to pack?"
          type="text"
          className="flex-1 p-4 bg-neutral-200 focus:bg-neutral-300/90 transition-all outline-none"
          defaultValue=""
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 active:bg-blue-400 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Add item
        </button>
      </form>
    </div>
  )
}