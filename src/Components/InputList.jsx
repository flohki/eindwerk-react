import { useState } from 'react';


export default function InputList({ onAddItem }) {

  const [category, setCategory] = useState("Documents"); // Houd de geselecteerde categorie bij
  const [itemName, setItemName] = useState(""); // Houd de naam van het item bij

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName.trim() !== "") {
      // Voeg het item toe aan de lijst
      onAddItem({ name: itemName, category: category });
      setItemName(""); // Wis het invoerveld na het toevoegen
    }
  };

  return (
    <div className="my-8">
      <div className="flex gap-2 items-center mb-2">
        Category:{" "}
        <button
          type="button"
          className={`transition border px-4 py-1 rounded-full ${
            category === "Documents" ? "border-blue-500 bg-blue-500 text-blue-100" : "border-neutral-200 text-neutral-500"
          }`}
          onClick={() => handleCategoryChange("Documents")}
        >
          Documents
        </button>
        <button
          type="button"
          className={`transition border px-4 py-1 rounded-full ${
            category === "Clothes" ? "border-blue-500 bg-blue-500 text-blue-100" : "border-neutral-200 text-neutral-500"
          }`}
          onClick={() => handleCategoryChange("Clothes")}
        >
          Clothes
        </button>
        <button
          type="button"
          className={`transition border px-4 py-1 rounded-full ${
            category === "Camping gear" ? "border-blue-500 bg-blue-500 text-blue-100" : "border-neutral-200 text-neutral-500"
          }`}
          onClick={() => handleCategoryChange("Camping gear")}
        >
          Camping gear
        </button>
        <button
          type="button"
          className={`transition border px-4 py-1 rounded-full ${
            category === "Toiletry" ? "border-blue-500 bg-blue-500 text-blue-100" : "border-neutral-200 text-neutral-500"
          }`}
          onClick={() => handleCategoryChange("Toiletry")}
        >
          Toiletry
        </button>
      </div>
      <form className="flex rounded-lg overflow-hidden" onSubmit={handleSubmit}>
        <input
          placeholder="What would you like to pack?"
          type="text"
          className="flex-1 p-4 bg-neutral-200 focus:bg-neutral-300/90 transition-all outline-none"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
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