import React, { useRef, useState } from "react";
import Button from "./Button";
import "../App.css";

const List = ({ item, onRemove, onReplace, replaceData, onConfirm }) => {
  const [editedText, setEditedText] = useState(item.text);
  const inputRef = useRef(null);

  const inputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="list">
      <input disabled type="text" defaultValue={item.date} />

      <input
        // disabled={replaceData === item.id ? false : true}
        ref={inputRef}
        type="text"
        value={editedText}
        onChange={inputChange}
        id={item.id}
      />

      <Button
        onRemove={onRemove}
        item={item}
        onReplace={(id) => {
          onReplace(id);
          inputRef.current.focus();
        }}
        replaceData={replaceData}
        onConfirm={() => onConfirm(item.id, "confirm", editedText)}
      />
    </div>
  );
};

export default List;
