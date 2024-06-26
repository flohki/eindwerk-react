import { useState } from 'react';
import './App.css';
import InputList from './Components/InputList';
import ToPackList from './Components/ToPackList';
import PackedList from './Components/PackedList';

function App() {

  const [toPackItems, setToPackItems] = useState([]);
  const [packedItems, setPackedItems] = useState([]);

  const handleAddItem = (newItem) => {
    setToPackItems([...toPackItems, newItem]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...toPackItems.slice(0, index), ...toPackItems.slice(index + 1)];
    setToPackItems(updatedItems);
  };

  const handlePackItem = (index) => {
    const itemToPack = toPackItems[index];
    setToPackItems(toPackItems.filter((_, i) => i !== index));
    setPackedItems([...packedItems, itemToPack]);
  };

  const handleUnpackItem = (index) => {
    const itemToUnpack = packedItems[index];
    setPackedItems(packedItems.filter((_, i) => i !== index));
    setToPackItems([...toPackItems, itemToUnpack]);
  };


  return (
    <div className="App">
      <div className="max-w-[1100px] mx-auto py-8">
        <h1 className="mb-4 text-4xl font-bold">Packing list</h1>
        <InputList onAddItem={handleAddItem} />
        <div className="grid grid-cols-2 gap-4 mt-12 transition">
          <div>
            <header className="grid gap-2 items-center mb-6 border-b pb-6">
              <h2 className="font-bold text-2xl">To pack items</h2>
            </header>
            <ToPackList items={toPackItems} onPackItem={handlePackItem} onRemoveItem={(index) => handleRemoveItem(index)}/>
          </div>
          <div>
            <header className="grid gap-2 items-center mb-6 border-b pb-6">
              <h2 className="font-bold text-2xl">Packed items</h2>
            </header>
            <PackedList items={packedItems} onUnpackItem={handleUnpackItem} onRemoveItem={(index) => handleRemoveItem(index)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
