export default function Item({ name, category, onRemove, onUnpack }){
  return(
    <li>
    <div className="overflow-hidden bg-neutral-200 transition-all rounded-lg flex justify-between gap-2 flex-row-reverse">
      <div className="p-4 flex-1 flex gap-4 items-center justify-between">
        <div className="grid">
          <span>{name}</span>
          <span className="text-neutral-400">{category}</span>
        </div>
        <button onClick={onRemove} className="text-sm opacity-30 hover:opacity-100 px-4 py-1 flex items-center justify-center bg-gray-400 text-black hover:bg-red-300/70 transition-all hover:text-red-500 rounded-full text-lg">
          × remove item
        </button>
      </div>
      <button onClick={onUnpack} className="bg-sky-500 hover:bg-sky-600 transition-all text-sky-100 p-4">
        Unpack
      </button>
    </div>
  </li>
  )
}