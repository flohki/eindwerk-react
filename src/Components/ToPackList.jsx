import React from 'react';
import Item from './Item';

export default function ToPackList({ items, onPackItem, onRemoveItem }) {
  return (
    <ul className="grid gap-2">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          category={item.category}
          onPack={() => onPackItem(index)}
          onRemoveItem={() => onRemoveItem(index)}
          showPackButton={true}
        />
      ))}
    </ul>
  );
}