import React, { useState } from "react";
import List from "./List";

const Item = ({ items, onRemove, setItems }) => {
  const [replaceData, setReplaceData] = useState(null);
  const onReplace = (id) => {
    setReplaceData(id);
  };

  const onConfirm = (id, type, editedText) => {
    setReplaceData(id);
    if (type === "confirm") {
      const newList = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text: editedText,
          };
        }
        return item;
      });
      setItems(newList);
      setReplaceData(null);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <List
          onRemove={onRemove}
          item={item}
          key={item.id}
          onReplace={() => onReplace(item.id)}
          replaceData={replaceData}
          onConfirm={onConfirm}
        />
      ))}
    </div>
  );
};

export default Item;
