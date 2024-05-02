import React from 'react';
import Item from './Item';

export default function PackedList({ items, onUnpackItem, onRemoveItem }) {
  return (
    <ul className="grid gap-2">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          category={item.category}
          onUnpack={() => onUnpackItem(index)}
          onRemoveItem={() => onRemoveItem(index)}
          showUnpackButton={true}
        />
      ))}
    </ul>
  );
}