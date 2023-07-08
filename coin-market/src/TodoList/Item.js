import React, { useState, useRef } from "react";
import List from "./List";

const Item = ({ items, onRemove, setItems }) => {
  // 수정하고 바뀐 정보를 업데이트 할 수 있도록 state 선언
  const [replaceData, setReplaceData] = useState(null);

  const focusRef = useRef(null);
  const onReplace = (id) => {
    setReplaceData(id);
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };

  // 수정한 배열 ID를 저장
  const onConfirm = (id, type, editedText) => {
    setReplaceData(id);
    if (type === "confirm") {
      const newList = items.map((item) => {
        // 목록에서 수정 후 확인 버튼을 누르면 text를 editedText로 수정
        if (item.id === id) {
          return {
            ...item,
            text: editedText,
          };
        }
        return item;
      });
      // 새로운 배열에 적용
      setItems(newList);
      setReplaceData(null);
    }
  };
  // 정렬함수 sort메소드를 사용해 가장 최신 날짜가 아래로 올 수 있게끔 구현
  const sortItemsByDate = () => {
    return [...items].sort(
      (beforeDate, nextDate) =>
        new Date(nextDate.date) - new Date(beforeDate.date)
    );
  };
  return (
    <div>
      {/* 정렬된 데이터들에 map을 사용한다 */}
      {sortItemsByDate().map((item) => (
        <List
          onRemove={onRemove}
          item={item}
          key={item.id}
          onReplace={onReplace}
          replaceData={replaceData}
          onConfirm={onConfirm}
          focusRef={focusRef}
        />
      ))}
    </div>
  );
};

export default Item;
