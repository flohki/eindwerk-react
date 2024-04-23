import Item from "./Item";

export default function ItemList({ items, onRemoveItem, onUnpackItem }) {
  return(
    <ul className="grid gap-2">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          category={item.category}
          onRemove={() => onRemoveItem(index)}
          onUnpack={() => onUnpackItem(index)}
        />
      ))}
    </ul>
  )
}