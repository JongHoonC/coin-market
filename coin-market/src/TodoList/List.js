import React, { useState } from "react";
import Button from "./Button";
import "../App.css";
// item.js 에서 데이터를 넘겨받아 넘겨받은 데이터들을 화면에 뿌려주는 컵포넌트
const List = ({ item, onRemove, onReplace, replaceData, onConfirm }) => {
  // 수정되기 전 초기 값이니까 item.text를 초기값으로 useState 설정한다
  const [editedText, setEditedText] = useState(item.text);

  // input 요소의 값이 변경될 때마다 값을 editedText 으로 업데이트
  const inputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="list">
      <input disabled type="text" defaultValue={item.date} />

      <input
        disabled={replaceData === item.id ? false : true}
        type="text"
        value={editedText}
        onChange={inputChange}
      />

      <Button
        onRemove={onRemove}
        item={item}
        onReplace={onReplace}
        replaceData={replaceData}
        onConfirm={() => onConfirm(item.id, "confirm", editedText)}
      />
    </div>
  );
};

export default List;
