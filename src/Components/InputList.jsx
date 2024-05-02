import { useState } from 'react';


export default function InputList({ onAddItem }) {

  const [category, setCategory] = useState("Documents");
  const [itemName, setItemName] = useState("");

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName.trim() !== "") {
      onAddItem({ name: itemName, category: category });
      setItemName("");
    }
  };

  return (
    <div className="my-8">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2 items-center">
          Category:{" "}
          {["Documents", "Clothes", "Camping gear", "Toiletry"].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`transition border px-4 py-1 rounded-full ${
                category === cat ? "border-blue-500 bg-blue-500 text-blue-100" : "border-neutral-200 text-neutral-500"
              }`}
              onClick={() => handleCategoryChange(cat)}
              aria-label={`Select ${cat} category`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          placeholder="What would you like to pack?"
          type="text"
          className="p-4 bg-neutral-200 focus:bg-neutral-300/90 transition-all outline-none"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          aria-label="Enter item name"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 active:bg-blue-400 text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          aria-label="Add item"
          disabled={!itemName.trim()}
        >
          Add item
        </button>
      </form>
    </div>
  )
}